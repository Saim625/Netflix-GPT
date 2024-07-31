import React, { useState } from 'react'
import Header from './Header';

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleForm = ()=>{
        setIsSignInForm(!isSignInForm);  
    }
  return (
    <div>
         <Header/>
         <div className='absolute'>
         <img src='https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/de5aa17a-29b6-4167-8c39-834aae8f328e/PK-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_8056b691-2a93-40af-add4-ca200ba1151b_medium.jpg' alt='bg-pic' />
         </div>
         <form className='w-4/12 bg-black text-white p-12 absolute my-32 mx-auto right-0 left-0 rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl mb-6'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>{
                 !isSignInForm && <input type='text' placeholder='Full Name' className='w-full my-4 p-4 rounded-lg bg-gray-800 bg-opacity-30'/>
            }
            <input type='text' placeholder='Email or mobile number' className='w-full my-4 p-4 rounded-lg bg-gray-800 bg-opacity-30'/>
            <input type='password' placeholder='Password' className='w-full my-4 p-4 rounded-lg bg-gray-800 bg-opacity-30'/>
            <button className='w-full my-6 bg-red-700 p-2 rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sigin In Now."}</p>
         </form>
        
    </div>
   
  )
}

export default Login;