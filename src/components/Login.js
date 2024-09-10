import React, { useRef, useState} from 'react'
import Header from './Header';
import { checkValidData } from '../utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import {BG_URL, PHOTO_URL} from "../utils/constants"

const Login = () => {
    const dispatch = useDispatch();
    

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [emailErrMessage, setEmailErrMessage] = useState(null);
    const [passErrMessage, setPassErrMessage] = useState(null);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {

        const { emailMessage, passwordMessage } = checkValidData(email.current.value, password.current.value);
        setEmailErrMessage(emailMessage)
        setPassErrMessage(passwordMessage)
        if (emailMessage || passwordMessage) return;

        if (!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: PHOTO_URL
                      }).then(() => {
                        if (user) {
                            const {uid, email, displayName, photoURL} = auth.currentUser;
                            dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                            
                        } else {
                         dispatch(removeUser());
                        }
                    
                      }).catch((error) => {
                        // An error occurred
                        // ...
                      });
                    

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setPassErrMessage(errorCode + "-" + errorMessage)

                });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setPassErrMessage(errorCode + "-" + errorMessage)
                });
        }
    }

   

    const toggleForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header />
            <div className='fixed'>
                <img className='h-screen w-screen object-cover' src={BG_URL} alt='bg-pic' />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='w-full md:w-4/12 bg-black text-white p-12 absolute my-32 mx-auto right-0 left-0 rounded-lg bg-opacity-80'>
                <h1 className='font-bold text-3xl mb-6'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>{
                    !isSignInForm && <input ref={name} type='text' placeholder='Full Name' className='w-full my-4 p-4 rounded-lg bg-gray-800 bg-opacity-30' />
                }
                <input ref={email}
                    type='email' placeholder='Email or mobile number' className='w-full my-4 p-4 rounded-lg bg-gray-800 bg-opacity-30' />
                <p className='text-red-600 font-semibold'>{emailErrMessage}</p>
                <input ref={password}
                    type='password' placeholder='Password' className='w-full my-4 p-4 rounded-lg bg-gray-800 bg-opacity-30' />
                <p className='text-red-600  font-semibold'>{passErrMessage}</p>
                <button className='w-full my-6 bg-red-700 p-2 rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='py-4 cursor-pointer' onClick={toggleForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sigin In Now."}</p>
            </form>

        </div>

    )
}

export default Login;