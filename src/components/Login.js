import React, { useState } from 'react'
import {auth} from '../config/firebase-config'
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import {signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { GoogleButton} from 'react-google-button'

const Login = ({isLoggedIn, authorizedUser}) => {
    const navigate = useNavigate();
    const[error, setError] = useState(false);
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    const auth = getAuth();


    const handleLogin = (e) =>{
        e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        isLoggedIn(true);
        console.log(user);
        navigate('/');
    })
    .catch((error) => {
        setError(true)
    });
    navigate('/')
    }

    const signInwithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        if(user){
          user.getIdToken().then((tkn)=>{
            // set access token in session storage
            sessionStorage.setItem("accessToken", tkn);
            authorizedUser(true)
            isLoggedIn(true)
          })
        }
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
    }

  return (
    <div>
        <form onSubmit={handleLogin}>
            <input type="email" placeholder='email' onChange={e => setEmail(e.target.value)}/>
            <input type="password" placeholder='password' onChange={e => setPassword(e.target.value)}/>
            {error && <span>Wrong email or password!</span>}
            <button type='submit'>Login</button>
        </form>
        <div onClick={signInwithGoogle} className='max-w-[240px] m-auto py-4'><GoogleButton /></div>
    </div>
  )
}

export default Login;