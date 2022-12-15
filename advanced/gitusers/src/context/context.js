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
          /* 
          console.log("res>>", res);

            res>> 
            Array [ {…}, {…} ]
            ​
            0: Object { status: "fulfilled", value: {…} }
            ​​
            status: "fulfilled"
            ​​
            value: Object { data: (100) […], status: 200, statusText: "OK", … }
            ​​
            <prototype>: Object { … }
            ​
            1: Object { status: "fulfilled", value: {…} }
            ​
            length: 2
            ​
            <prototype>: Array []
            context.js:38

        */
          const [repos, followers] = res;

          /* 

          console.log("repos,followers>>", repos, followers);

            repos,followers>> 
            Object { status: "fulfilled", value: {…} }

            Object { status: "fulfilled", value: {…} }
            ​
            status: "fulfilled"
            ​
            value: Object { data: (100) […], status: 200, statusText: "OK", … }
            ​​
            config: Object { timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", … }
            ​​
            data: Array(100) [ {…}, {…}, {…}, … ]
            ​​
            headers: Object { "cache-control": "public, max-age=60, s-maxage=60", "content-type": "application/json; charset=utf-8", etag: "W/\"9fcd0745a75b6a6e04328b3fd47dc8fc407b128bbf59a733b82e06369c155980\"", … }
            ​​
            request: XMLHttpRequest { readyState: 4, timeout: 0, withCredentials: false, … }
            ​​
            status: 200
            ​​
            statusText: "OK"
            ​​
            <prototype>: Object { … }        
        */

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

  // const getLoginCode = () => {
  //   /* Web APIs Location
  //     http://localhost:3000/?code=aa156a7a4791b72b101a
  //   */
  //   const queryString = window.location.search; // "?code=aa156a7a4791b72b101a"
  //   const urlParams = new URLSearchParams(queryString); // { code → "aa156a7a4791b72b101a" }
  //   const codeParam = urlParams.get("code"); // "aa156a7a4791b72b101a"
  //   console.log("codeParam>>", codeParam);
  // };

  function toggleError(show = false, msg = "") {
    setError({ show, msg });
  }

  useEffect(() => {
    checkRequests();
    // getLoginCode(); // codeParam>> aa156a7a4791b72b101a
  }, []);

  useEffect(() => {
    const queryString = window.location.search; // >> ?code=f360a608933a3bc4a9ea
    const urlParam = new URLSearchParams(queryString); // >> { code → "f360a608933a3bc4a9ea" }
    const codeParam = urlParam.get("code"); // >> 5b227ee63883465e3ccf
    console.log("codeParam>>", codeParam);

    if (codeParam && localStorage.getItem("accessToken") === null) {
      async function getAccessToken() {
        await fetch(`http://localhost:4000/getAccessToken?code=${codeParam}`, {
          method: "GET",
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("dataFirst", data);
            if (data.access_token) {
              localStorage.setItem("accessToken", data.access_token);
              setRender(!render);
            }
          });
      }
      getAccessToken();
    }

    async function getUserData() {
      await fetch(`http://localhost:4000/getUserData`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("dataFin>>", data);
          setGitUser(data);
        });
    }
    getUserData();

    function reloadUrl() {
      console.log("it's work");
      console.log(Boolean(localStorage.getItem("accessToken")));
      if (
        localStorage.getItem("accessToken") &&
        window.location.search.match("code")
      ) {
        console.log("it's work or not");
        const url = window.location.assign("http://localhost:3000");
        return url;
      }
      return;
    }

    reloadUrl();
  }, [render]);

  const loginWithGithub = () => {
    window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GIHUB_SEARCH_USER_ID}`
    );
  };
  /*     window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GIHUB_SEARCH_USER_ID}&redirect_uri=${process.env.REACT_APP_GIHUB_SEARCH_REDIRECT_URI}`
    );
  }; */

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
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubContext, GithubProvider };
