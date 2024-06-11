import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSigninForm, setIsSigninForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSigninForm = () => {
    setIsSigninForm(!isSigninForm);
  };

  const handleButtonClick = () => {
    // validate the form data
    const message = checkValidData(email?.current?.value, password?.current?.value, name?.current?.value, isSigninForm);
    setErrorMessage(message);

    if(message) return;

    // sign up
    if (!isSigninForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate('/browse');
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } 
    

    // sign in
    else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate('/browse');
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-12 bg-black absolute w-3/12 mt-36 mx-auto right-0 left-0 text-white bg-opacity-85 rounded-md"
      >
        <h1 className="font-bold m-3 text-3xl w-full mx-auto">
          {isSigninForm ? "Sign in" : "Sign up"}
        </h1>
        {!isSigninForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="rounded-sm p-3 m-3 w-full mx-auto bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="rounded-sm p-3 m-3 w-full mx-auto bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="rounded-sm p-3 m-3 w-full mx-auto bg-gray-700"
        />
        <p className="text-red-500 text-sm font-bold">{errorMessage}</p>
        <button
          className="rounded-sm font-semibold p-2 m-3 bg-red-600 w-full mx-auto"
          onClick={handleButtonClick}
        >
          {isSigninForm ? "Sign in" : "Sign up"}
        </button>

        <p className="my-3 w-full text-gray-300">
          {isSigninForm ? "New to Netflix?" : "Already Registered?"}{" "}
          <span
            className="font-semibold text-white cursor-pointer"
            onClick={toggleSigninForm}
          >
            {isSigninForm ? "Sign up now." : "Login now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
