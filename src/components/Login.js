import React from 'react'

export const Login = () => {
    const handleLogin = (e) =>{
        e.preventDefault()
    }
  return (
    <div>
        <form onSubmit={handleLogin}>
            <input type="email" placeholder='email' />
            <input type="password" placeholder='password' />
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}
