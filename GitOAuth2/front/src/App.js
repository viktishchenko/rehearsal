import React, { useEffect, useState } from "react";

function App() {
  const [render, setRender] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    const queryString = window.location.search; // >> ?code=f360a608933a3bc4a9ea
    const urlParam = new URLSearchParams(queryString); // >> { code → "f360a608933a3bc4a9ea" }
    const codeParam = urlParam.get("code"); // >> 5b227ee63883465e3ccf
    console.log(codeParam);

    if (codeParam && localStorage.getItem("accessToken") === null) {
      async function getAccessToken() {
        await fetch(`http://localhost:4000/getAccessToken?code=${codeParam}`, {
          method: "GET",
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
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
          setUser(data);
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

  useEffect(() => {}, []);

  const loginWithGithub = () => {
    window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GIHUB_SEARCH_USER_ID}`
    );
  };

  return (
    <div className="App">
      {localStorage.getItem("accessToken") && user ? (
        <>
          <h3>Welcom, {user.login}</h3>
          <button
            className="login"
            onClick={() => {
              localStorage.removeItem("accessToken");
              setRender(!render);
            }}
          >
            log out
          </button>
        </>
      ) : (
        <>
          <h3>User is not logged in</h3>
          <button className="login" onClick={loginWithGithub}>
            login with github
          </button>
        </>
      )}
    </div>
  );
}

export default App;
