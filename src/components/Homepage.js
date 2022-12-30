import React from 'react'
import { Link } from 'react-router-dom'

export const Homepage = () => {
  return (
    <div>
        <div>Main Hub</div>
        <Link to='/myhub'><div>Personal Hub</div></Link>
    </div>
  )
}
