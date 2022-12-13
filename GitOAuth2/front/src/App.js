import React, { useEffect } from "react";

/* 
  GET https://github.com/login/oauth/authorize?client_id=
  POST https://github.com/login/oauth/access_token?client_id=&client_secret=&code=
  Authorization: Bearer OAUTH-TOKEN
  GET https://api.github.com/user
*/
function App() {
  useEffect(() => {
    // http://localhost:3000/?code=bb037bcff753f810f546

    const queryString = window.location.search; // >> ?code=f360a608933a3bc4a9ea
    const urlParam = new URLSearchParams(queryString); // >> { code → "f360a608933a3bc4a9ea" }
    const codeParser = urlParam.get("code"); // >> 5b227ee63883465e3ccf
  }, []);

  const loginWithGithub = () => {
    window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GIHUB_SEARCH_USER_ID}`
    );
    console.log("halo");
  };

  return (
    <div className="App">
      <button className="login" onClick={loginWithGithub}>
        login with github
      </button>
    </div>
  );
}

export default App;
