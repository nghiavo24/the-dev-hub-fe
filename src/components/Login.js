import React, { useState } from 'react'
import {auth} from '../config/firebase-config'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const[error, setError] = useState(false);
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');


    const handleLogin = (e) =>{
        e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
    })
    .catch((error) => {
        setError(true)
    });
    }

  return (
    <div>
        <form onSubmit={handleLogin}>
            <input type="email" placeholder='email' onChange={e => setEmail(e.target.value)}/>
            <input type="password" placeholder='password' onChange={e => setPassword(e.target.value)}/>
            {error && <span> Wrong email or password!</span>}
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login;