import React, { useState, useEffect } from "react";
import mockUser from "./mockData/mockUser";
import mockRepos from "./mockData/mockRepos";
import mockFollowers from "./mockData/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithuUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);

  // request loading
  const [requests, setRequests] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: "" });

  // github API
  const [gitUser, setGitUser] = useState();
  const [render, setRender] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const searchGithubUser = async (user) => {
    toggleError();
    setIsLoading(true);

    const response = await axios(`${rootUrl}/users/${user}`).catch((err) =>
      console.log(err)
    );
    if (response) {
      setGithuUser(response.data);
      const { login, followers_url } = response.data;

      await Promise.allSettled([
        axios(`${rootUrl}/users/${login}/repos?per_page=100`),
        axios(`${followers_url}?per_page=100`),
      ])
        .then((res) => {
          const [repos, followers] = res;

          if (repos.status === "fulfilled") {
            setRepos(repos.value.data);
          }

          if (followers.status === "fulfilled") {
            setFollowers(followers.value.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toggleError(true, "there is no user with that username");
    }
    checkRequests();
    setIsLoading(false);
  };

  // check rate
  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;
        setRequests(remaining);
        if (remaining === 0) {
          toggleError(true, "sorry, you have exeeded your hourly rate limit");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function toggleError(show = false, msg = "") {
    setError({ show, msg });
  }

  useEffect(() => {
    checkRequests();
  }, []);

  useEffect(() => {
    const queryString = window.location.search; // >> ?code=f360a608933a3bc4a9ea
    const urlParam = new URLSearchParams(queryString); // >> { code → "f360a608933a3bc4a9ea" }
    const codeParam = urlParam.get("code"); // >> 5b227ee63883465e3ccf

    if (localStorage.getItem("accessToken")) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }

    if (codeParam && localStorage.getItem("accessToken") === null) {
      async function getAccessToken() {
        await axios
          .get(`http://localhost:4000/getAccessToken?code=${codeParam}`)
          .then((res) => {
            if (res.data.access_token) {
              localStorage.setItem("accessToken", res.data.access_token);
              setRender(!render);
            }
          });
      }
      getAccessToken();
    }

    async function getUserData() {
      await axios
        .get(`http://localhost:4000/getUserData`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((res) => {
          setGitUser(res.data);
        });
    }
    getUserData();
    /* 
      !!! FIX THIS BSHT, REDIRECT FROM BACKEND !!!
      */
    /*     function reloadUrl() {
      if (
        localStorage.getItem("accessToken") &&
        window.location.search.match("code")
      ) {
        const url = window.location.assign("http://localhost:3000");
        return url;
      }
      return;
    }

    reloadUrl(); */
  }, [render]);

  const loginWithGithub = () => {
    window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GIHUB_SEARCH_USER_ID}`
    );
  };

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        requests,
        error,
        searchGithubUser,
        isLoading,
        loginWithGithub,
        gitUser,
        isAuthenticated,
        render,
        setRender,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubContext, GithubProvider };
