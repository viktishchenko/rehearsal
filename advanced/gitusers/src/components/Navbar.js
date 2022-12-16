import React from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";

/* 
data from server:
OUT
{IsAuthenticated: false, user: undefined, isLoadding: true}
IN
{IsAuthenticated: true, user: {}, isLoadding: false}
*/

const Navbar = () => {
  const { loginWithGithub, gitUser, isAuthenticated, render, setRender } =
    React.useContext(GithubContext);

  let isUser = false;
  if (gitUser && isAuthenticated) {
    isUser = true;
  }

  return (
    <Wrapper>
      {isUser && gitUser?.avatar_url && (
        <img src={gitUser.avatar_url} alt={gitUser.login} />
      )}
      {isUser && gitUser?.login && (
        <h4>
          Welcom, <strong>{gitUser.login.toUpperCase()}</strong>
        </h4>
      )}

      {isUser ? (
        <button
          onClick={() => {
            localStorage.removeItem("accessToken");
            setRender(!render);
          }}
        >
          logout
        </button>
      ) : (
        <button onClick={loginWithGithub}>login with github </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding: 1.5rem;
  margin-bottom: 4rem;
  background: var(--clr-white);
  text-align: center;
  display: grid;
  grid-template-columns: auto auto 100px;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  h4 {
    margin: 4px 0 0;
    font-weight: 400;
  }
  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
  button {
    background: transparent;
    border: transparent;
    font-size: 1.2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
`;

export default Navbar;
