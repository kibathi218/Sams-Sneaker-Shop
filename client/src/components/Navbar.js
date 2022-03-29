import React from 'react'
import { Link } from 'react-router-dom'
 
const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to="/">HOME</Link>
        <Link to="shop">SHOP</Link>
        <Link to="help">HELP</Link>


    </div>
  )
}

export default Navbar