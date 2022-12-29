import React from 'react'

const Navbar = () => {
  return (
    <div>Navbar
        {/* Add logo for the dev hub with img tag */}
        <div>
            {/* add links to different pages here with the Link tag */}
            <Link to= '/mainhub'>Main Hub</Link>
            <Link to='/myhub'>My Hub</Link>
            <Link to='application/add'>New Application</Link>
            
        </div>
    </div>
    
  )
}

export default Navbar