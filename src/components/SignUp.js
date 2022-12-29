import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {auth} from '../config/firebase-config';
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleSignup = (e) => {
        e.preventDefault()

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(error)
        });
    }

  return (
    <div>
    <form onSubmit={handleSignup}>
        <input type="email" placeholder='email' onChange={e => setEmail(e.target.value)}/>
        <input type="password" placeholder='password' onChange={e => setPassword(e.target.value)}/>
        <button type='submit'>Sign Up</button>
    </form>
</div>
  )
}

export default SignUp