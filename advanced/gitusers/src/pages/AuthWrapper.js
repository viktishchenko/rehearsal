import styled from "styled-components";
import loadingGif from "../images/preloader.gif";
import { GithubContext } from "../context/context";
import React from "react";

const AuthWrapper = ({ children }) => {
  /*   const { xxx } = React.useContext(GithubContext);

  if (!xxx) {
    return (
      <Wrapper>
        <img src={loadingGif} alt="loader" />
      </Wrapper>
    );
  } */

  return <>{children}</>;
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  img {
    width: 150;
  }
`;

export default AuthWrapper;
