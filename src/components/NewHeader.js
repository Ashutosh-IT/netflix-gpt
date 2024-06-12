import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NewHeader = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute px-8 z-10 py-2 bg-gradient-to-b from-black w-full flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      <div className="flex items-center justify-between">
        <img
            className="my-5 rounded-md h-10"
            src={user?.photoURL}
            alt="user"
        />
        <button
          onClick={handleSignOut}
          className="text-white font-bold px-2 py-1 rounded-md my-5"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default NewHeader;
