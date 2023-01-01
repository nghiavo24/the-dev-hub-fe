import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>
        <Link to='/mainhub'></Link><div>Main Hub</div></Link>
        <Link to='/myhub'><div>Personal Hub</div></Link>
    </div>
  )
}

export default Homepage