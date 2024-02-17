import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate(null);
  const handlerLogin = async () => {
    const { email, password } = formValues;
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      toast.error(error.message);
    }
  };
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <StyledDiv>
      <BackgroundImage />
      <div className="content">
        <Header />
        <div className="form-container flex j-center  a-center column">
          <div className="form flex column j-center a-center">
            <div className="title">
              <h3>Login</h3>
            </div>
            <div className="container flex column">
              <input
                type="email"
                name="email"
                id="userEmail"
                value={formValues.email}
                placeholder="Email Address"
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <input
                type="password"
                name="password"
                id="userPassword"
                placeholder="Password"
                value={formValues.password}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <button onClick={handlerLogin}>Log In</button>
            </div>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
};

export default Login;

const StyledDiv = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .form-container {
      gap: 2rem;
      height: 85vh;
      .form {
        padding: 2rem;
        background-color: #000000b0;
        width: 25vw;
        gap: 2rem;
        color: white;
        .container {
          gap: 2rem;
          input {
            padding: 0.5rem 1rem;
            width: 15rem;
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
        }
      }
    }
  }
`;
