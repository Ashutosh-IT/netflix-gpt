import { onAuthStateChanged,signOut } from 'firebase/auth';
import {useEffect} from 'react'
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice'; 
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
          navigate('/browse');
    
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate('/');
        }
      });
  },[]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute px-28 z-10 py-2 bg-gradient-to-b from-black w-full flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      {user && <div className="flex items-center justify-between">
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
      </div>}
    </div>
  )
}

export default Header