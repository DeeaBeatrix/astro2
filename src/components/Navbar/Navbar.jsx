import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/'> Home </Link>
      <Link to='/horoscope'> Horoscop </Link>
      <Link to='/harta-natala'> Harta Natala</Link>
      <Link to='/despre-mine'> Despre mine </Link>
    </nav>
  );
}

export default Navbar;