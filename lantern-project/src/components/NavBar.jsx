import React, { useState } from 'react'
 import { Link } from "react-router-dom"




const NavBar = ({ user, handleLogOut }) => {
  const [nav, setNav] = useState(false)
  let userOptions
  if (user) {
    userOptions = (
      <nav>
        <div className=''>
          <h1 className=''>Tavern.</h1>
          <ul className='navb'>
            <li className=''><Link to="/">Home</Link></li>
            <li><Link>Sign Out</Link></li>
            <li className=''><Link to="/about">About</Link></li>
            <li className=''><Link to="/updateProfile">Update Profile</Link></li>
            <li className=''><Link to="/profile">ProfilePage</Link></li>
          </ul>
        </div>
      </nav>
    )
  }

  
  const publicOptions = (
    <nav>
      <div className=''>
        <h1 className=''>Lantern</h1>
        <ul className='navb'>
          <li className=''><Link to="/">Home</Link></li>
          <li className=''><Link to="/makeProfile">Register</Link></li>
          <li><Link to="/signIn" >Sign In</Link></li>
          <li className=''><Link to="/about">About</Link></li>
          
        </ul>
      </div>
    </nav>
  )

  return (
    <header>
      {user ? userOptions : publicOptions}
    </header>

  )
}

export default NavBar