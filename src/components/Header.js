import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGE } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLang } from '../utils/configSlice';

const Header = () => {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user)

  const showGptSeacrch = useSelector(store => store.gpt.gptSearchView)

  const navigate = useNavigate()

  const handleSignOut = () => {

    signOut(auth)
    .then(() => {
      navigate("/")
    }).catch((error) => {
      
    });

  }

  const handleGptSearchClick = ()=>{
    dispatch(toggleGptSearchView())
  }
  useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const {uid, email, displayName, photoURL} = user;
            dispatch(addUser(
                {uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                navigate("/browse")
            
        } else {
         dispatch(removeUser());
         navigate("/")
        }
      });
      return () => unsubscribe();
}, [])

const handleLangChange = (e)=>{
  dispatch(changeLang(e.target.value))
}
  return (
    <div className='flex justify-between w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img className='w-44' src = {LOGO} alt='logo' />

      {user && (<div className='flex p-2'>
        
        {showGptSeacrch && 
        <select className='px-3 my-4 mx-2 bg-gray-900 text-white rounded-lg' onClick={handleLangChange}>
          {SUPPORTED_LANGUAGE.map(language => (<option key={language.name} value={language.identifier}>{language.name}</option>))}
        </select>}
        <button className='bg-purple-800 text-white px-4 py-2 mx-2 my-4 rounded-lg' onClick={handleGptSearchClick}>{showGptSeacrch ? "Homepage" : "GPT Search"}</button>
        <img className='w-12 h-12 m-1 cursor-pointer' alt='signout' src={user?.photoURL} />
        <button onClick={handleSignOut} className='font-bold text-white'>(sign out)</button>
      </div>)}
    </div>
  )
}

export default Header;