import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { FaPowerOff, FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { toast } from "react-toastify";
const Navbar = ({ isScrolled }) => {
  const navigate = useNavigate(null);
  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);

  const links = [
    { name: "Home", link: "/" },
    { name: "TV Shows", link: "/tv" },
    { name: "Movies", link: "/movies" },
    { name: "My List", link: "/mylist" },
  ];
  const handlerSignOut = () => {
    signOut(firebaseAuth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <StyledDiv>
      <nav className={`flex ${isScrolled ? "scrolled" : ""}`}>
        <div className="left flex a-center">
          <div className="brand flex a-center j-center">
            <img src={logo} alt="" />
          </div>
          <ul className="links flex">
            {links.map(({ link, name }) => {
              return (
                <li className="div" key={name}>
                  <Link to={link}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="right flex a-center">
          <div className={`search ${showSearch && "show-search"}`}>
            <button
              onFocus={() => setShowSearch(true)}
              onBlur={() => {
                !inputHover && setShowSearch(true);
              }}
            >
              <FaSearch />
            </button>
            <input
              type="text"
              placeholder="Search"
              onMouseEnter={() => setInputHover(true)}
              onMouseLeave={() => setShowSearch(false)}
              onBlur={() => {
                setShowSearch(false);
                setInputHover(false);
              }}
            />
          </div>
          <button onClick={handlerSignOut}>
            <FaPowerOff />
          </button>
        </div>
      </nav>
    </StyledDiv>
  );
};

export default Navbar;
const StyledDiv = styled.div`
.scrolled{
    background-color:black;
}
nav{
position:sticky;
top:0;
width:100%;
position:fixed;
top:0;
z-index:2;
padding:0rem 4rem;
align-items:center;
transition:0.3s ease-in-out;
justify-content:space-between;
.left{
    gap:2rem;
    .brand{
     img{
        height:4rem;
     }   
    }
    .links{
        list-style-type:none;
         gap:2rem;
         li{
            a{
                color:white;
                text-decoration:none;
            }
         }
    }
}
.right{
   gap:1rem;
   button{
    background-color:transparent;
    border:none;
    cursor:pointer;
    &:focus{
        outline:none;
    }
    svg{
        color :#f34242;
        font-size:1.2rem; 
    }
   } 
   .search{
    display:flex;
    gap:0.4rem;
    align-items:center;
    justify-content:center;
    padding:0.2rem;
    padding-left:0.5rem;
    button{
        background-color:transparent;
        svg{
            color:white;
        }
    }
    input{
        width:0;
        opacity:0;
        visibility:hidden;
        transition:0.3s ease-in-out;
        background-color:transparent;
        border:none;
        color:white;
        &:focus{
            outline:none;
        }
    }
   }
   .show-search{
    border:1px solid white;
    background-color:rgba(0,0,0,0.6);
    input{
        width:100%;
        opacity:1;
        visibility:visible; 
    } 
   }
}
}
}`;
