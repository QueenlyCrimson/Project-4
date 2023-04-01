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
          <ul className=''>
            <li className=''><Link to="/feed">Feed</Link></li>
            
            <li className=''><Link to="/about">About</Link></li>
            <li className=''><Link to="/makePost">MakePost</Link></li>
            <li className=''><Link to="/profile">ProfilePage</Link></li>
          </ul>
        </div>
      </nav>
    )
  }

  
  const publicOptions = (
    <nav>
      <div className=''>
        <h1 className=''>Tavern.</h1>
        <ul className=''>
          <li className=''><Link to="/">Home</Link></li>
          <li className=''><Link to="/makeProfile">Register</Link></li>
          <li>Sign In</li>
          <li className=''><Link to="/about">About</Link></li>
          
        </ul>
      </div>
    </nav>
  )

  return (
    <header>
      {user ? userOptions : publicOptions}
    </header>


    // <nav>
    //   <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto text-white'>
    //     <h1 className='w-full text-3xl font-bold text-[#e57626]'>Tavern.</h1>
    //     <ul className='hidden md:flex'>
    //       <li className='p-4 hover:text-orange-500'><Link to="/">Home</Link></li>
    //       <li className='p-4 hover:text-orange-500'><Link to="/makeProfile">Register</Link></li>
    //       <SignInButton user={user} handleLogOut={handleLogOut} />
    //       <li className='p-4 hover:text-orange-500'><Link to="/about">About</Link></li>
    //       <li className='p-4 hover:text-orange-500'><Link to="/makePost">MakePost</Link></li>
    //       <li className='p-4 hover:text-orange-500'><Link to="/updateProfile">Update Profile</Link></li>
    //       <li className='p-4 hover:text-orange-500'><Link to="/profile">ProfilePage</Link></li>
    //     </ul>

    /* <div onClick={handleNav} className='block md:hidden'>
      {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={30} />}
      <div className={!nav ? 'fixed left-0 top-0 w-{60%} h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#e57626] m-4'>Tavern.</h1>
        <ul className='uppercase p-4 '>
          <li className='p-4 border-b border-gray-600 hover:text-orange-500'><Link to="/">Home</Link></li>
          <li className='p-4 border-b border-gray-600 hover:text-orange-500'><Link to="/makeProfile">Register</Link></li>
          <li className='p-4 border-b border-gray-600 hover:text-orange-500'><Link to="/signIn">Sign In</Link></li>
          <li className='p-4 hover:text-orange-500'><Link to="/about">About</Link></li>
        </ul>
      </div>
    </div> */
    //   </div>
    // </nav>
  )
}

export default NavBar