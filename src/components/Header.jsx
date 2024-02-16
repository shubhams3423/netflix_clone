import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
const Header = (props) => {
  const navigate = useNavigate(null);
  return (
    <StyledDiv className="flex a-center j-between">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <button onClick={() => navigate(props.login ? "/login" : "/signup")}>
        {props.login ? "Log In" : "Sign Up"}
      </button>
    </StyledDiv>
  );
};

export default Header;
const StyledDiv = styled.div`
  padding: 0 4rem;
  .logo {
    img {
      height: 5rem;
    }
  }
  button {
    padding: 0.5rem 1rem;
    background-color: #e50914;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 0.2rem;
    font-weight: 600;
    font-size: 1.05rem;
  }
`;
