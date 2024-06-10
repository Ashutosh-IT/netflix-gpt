import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSigninForm, setIsSigninForm] = useState(true);

  const toggleSigninForm = () => {
    setIsSigninForm(!isSigninForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form className="p-12 bg-black absolute w-3/12 mt-36 mx-auto right-0 left-0 text-white bg-opacity-85 rounded-md">
        <h1 className="font-bold m-3 text-3xl w-full mx-auto">
          {isSigninForm ? "Sign in" : "Sign up"}
        </h1>
        {!isSigninForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="rounded-sm p-2 m-3 w-full mx-auto bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="rounded-sm p-2 m-3 w-full mx-auto bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="rounded-sm p-2 m-3 w-full mx-auto bg-gray-700"
        />
        <button className="rounded-sm font-semibold p-2 m-3 bg-red-600 w-full mx-auto">
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
