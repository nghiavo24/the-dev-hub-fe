import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {auth} from '../config/firebase-config';
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
    const navigate = useNavigate();
    const[error, setError] = useState(false);
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleSignup = (e) => {
        e.preventDefault()

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        const user = userCredential.user;
        navigate('/login')
        })
        .catch((error) => {
            setError(true);
        });
    }

  return (
    <div>
    <form onSubmit={handleSignup}>
        <input type="email" placeholder='email' onChange={e => setEmail(e.target.value)} required/>
        <input type="password" placeholder='password' onChange={e => setPassword(e.target.value)} required minLength='6'/>
        {error && <span>This email is already in use!</span>}
        <button type='submit'>Sign Up</button>
    </form>
</div>
  )
}

export default SignUp