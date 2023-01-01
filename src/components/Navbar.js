import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../media/thedevhub.png'

const Navbar = () => {
  return (
    <div>
        <img src={logo} />
        <div>
            {/* add links to different pages here with the Link tag */}
            <Link to='/mainhub'>Main Hub</Link>
            <Link to='/myhub'>My Hub</Link>
            <Link to='application/add'>New Application</Link>

        </div>
    </div>
    
  )
}

export default Navbar