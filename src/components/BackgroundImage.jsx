import React from "react";
import backgroundImg from "../assets/login.jpg";
import styled from "styled-components";
const BackgroundImage = () => {
  return (
    <StyledDiv>
      <img src={backgroundImg} alt="" />
    </StyledDiv>
  );
};

export default BackgroundImage;
const StyledDiv = styled.div`
  height: 100vh;
  width: 100vw;
  img {
    height: 100vh;
    width: 100vw;
    opacity: 0.7;
  }
`;
