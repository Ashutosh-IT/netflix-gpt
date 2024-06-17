import { onAuthStateChanged,signOut } from 'firebase/auth';
import {useEffect} from 'react'
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice'; 
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LOGO, USER_DEFAULT_AVATAR } from '../utils/constants';

const Header = () => {

  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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

      return () => unsubscribe()
  },[]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute px-28 z-20 py-2 bg-gradient-to-b from-black w-full flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />

      {user && <div className="flex items-center justify-between">
        <img
            className="my-5 rounded-md h-10"
            src={user?.photoURL ? user.photoURL :{USER_DEFAULT_AVATAR}}
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