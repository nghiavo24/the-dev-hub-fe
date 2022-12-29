import React, { useState } from 'react'
import {auth} from '../config/firebase-config'
import {signInWithEmailAndPassword} from 'firebase/auth'

const Login = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');


    const handleLogin = (e) =>{
        e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
    }

  return (
    <div>
        <form onSubmit={handleLogin}>
            <input type="email" placeholder='email' onChange={e => setEmail(e.target.value)}/>
            <input type="password" placeholder='password' onChange={e => setPassword(e.target.value)}/>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login;