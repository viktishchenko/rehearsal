import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    (async function () {
      const usr = await axios
        .get(`http://localhost:4000/api/me`, {
          withCredentials: true,
        })
        .then((res) => res.data);

      setUser(usr);
    })();
  }, []);

  const loginWithGithub = () => {
    window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GIHUB_SEARCH_USER_ID}&redirect_uri=${process.env.REACT_APP_GIHUB_SEARCH_REDIRECT_URL}?path=${process.env.REACT_APP_GIHUB_SEARCH_PATH}&scope=user:email`
    );
  };

  const removeCookies = () => {
    console.log("may be tomorrow...");
  };

  return (
    <div className="App">
      {!user ? (
        <button className="login" onClick={loginWithGithub}>
          login with github
        </button>
      ) : (
        <>
          <h4>Welcome, {user.login.toUpperCase()}</h4>
          <br />
          <button className="login" onClick={removeCookies}>
            Logout
          </button>
        </>
      )}
    </div>
  );
}

export default App;
