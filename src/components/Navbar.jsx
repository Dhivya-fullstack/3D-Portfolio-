import React from 'react'
import {NavLink} from "react-router-dom";
import { logo } from '../assets/images';    

const Navbar = () => {
  return (
    <header className="header">   
    
    <NavLink to="/" >
        <img src={logo} alt="logo" className='w-12 h-12 object-contain'/>
    </NavLink>
    <nav className="flex text-lg gap-4 font-medium text-black">
    <NavLink to="/projects" className={({ isActive }) => isActive ? "text-blue-500" : "text-gray-700"}>Projects</NavLink>
    <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-500" : "text-gray-700"}>Contact</NavLink>
    <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-500" : "text-gray-700"}>About</NavLink>
   </nav>
    </header>
      )
}

export default Navbar;