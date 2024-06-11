import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link to='/'> Home </Link>
        <Link to='/horoscope'> Horoscop </Link>
        <Link to='/contact'> Contact </Link>
        <Link to='/about-me'> About me </Link>
    </nav>
  );
}

export default Navbar;