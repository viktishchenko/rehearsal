import React from "react";
import styled from "styled-components";
import loginImg from "../images/login-img.svg";
import { GithubContext } from "../context/context";

const Login = () => {
  const { loginWithGithub } = React.useContext(GithubContext);

  return (
    <Wrapper>
      <div className="container">
        <img src={loginImg} alt="github user" />
        <h1>github user</h1>
        <button className="btn" onClick={loginWithGithub}>
          login/signup
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;

export default Login;
