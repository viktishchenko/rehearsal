function App() {
  const loginWithGithub = () => {
    window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GIHUB_SEARCH_USER_ID}&redirect_uri=${process.env.REACT_APP_GIHUB_SEARCH_REDIRECT_URL}?path=${process.env.REACT_APP_GIHUB_SEARCH_PATH}&scope=user:email`
    );
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
