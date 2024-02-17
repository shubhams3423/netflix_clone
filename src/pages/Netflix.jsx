import React, { useState } from "react";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/home.jpg";
import movieLogo from "../assets/homeTitle.webp";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Netflix = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <StyledDiv>
      <Navbar isScrolled={isScrolled} />
      <div className="hero">
        <img src={backgroundImage} alt="" className="bg-image" />
        <div className="container">
          <div className="logo">
            <img src={movieLogo} alt="" />
          </div>
          <div className="buttons flex">
            <button
              className="flex a-center j-center"
              onClick={() => navigate("/player")}
            >
              <FaPlay /> Play
            </button>
            <button className="flex a-center j-center">
              <AiOutlineInfoCircle /> More Info
            </button>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
};

export default Netflix;
const StyledDiv = styled.div`
  background-color: black;
  .hero {
    position: relative;
    .background-img {
      filter: brightness(60%);
    }
    img {
      height: 100vh;
      width: 100vw;
    }
    .container {
      position: absolute;
      bottom: 5rem;
      .logo {
        img {
          width: 100%;
          height: 100%;
          margin-left: 5rem;
        }
      }
      .buttons {
        margin: 5rem;
        gap: 2rem;
        button {
          font-size: 1.4rem;
          gap: 1rem;
          border-radius: 0.2rem;
          padding: 0.5rem;
          padding-left: 2rem;
          padding-righ: 2.4rem;
          border: none;
          cursor: pointer;
          transitoin: 0.3s ease-in-out;
          &:hover {
            opacity: 0.8;
          }
          &:nth-of-type(2) {
            background-color: rgba(109, 109, 109, 0.7);
            color: white;
            svg {
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }
`;
