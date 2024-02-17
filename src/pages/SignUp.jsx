import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate(null);
  const handleSign = async () => {
    const { email, password } = formValues;
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
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
        <Header login={true} />
        <div className="body flex column j-center a-center">
          <div className="text flex column">
            <h1 className="">Unlimited Movies,Tv shows and more</h1>
            <h4>Watch anywhere cancel anytime</h4>
            <h6>
              Ready to watch enter your email to create or restart membership
            </h6>
          </div>
          <div className="form">
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
            {showPassword && (
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
            )}

            {!showPassword && (
              <button onClick={() => setShowPassword(true)}>Get Started</button>
            )}
          </div>
          <button onClick={handleSign}>Sign Up</button>
        </div>
      </div>
    </StyledDiv>
  );
};

export default SignUp;

const StyledDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
  }
  .body {
    gap: 1rem;
    .text {
      gap: 1rem;
      text-align: center;
      font-size: 2rem;
      h1 {
        padding: 0 23rem;
      }
    }

    .form {
      display: grid;
      grid-template-columns: ${({ showPassword }) =>
        showPassword ? "1fr 1fr" : "2fr 1fr"};
      width: 60%;
      input {
        color: black;
        padding: 1.5rem;
        font-size: 1.2rem;
        border: 1px solid black;
        &:focus {
          outline: none;
        }
      }
      button {
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        color: white;
        cursor: pointer;
        font-weight: 600;
        font-size: 1.05rem;
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
  }
`;
