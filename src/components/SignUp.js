import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function SignUp() {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    

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

export default SignUp