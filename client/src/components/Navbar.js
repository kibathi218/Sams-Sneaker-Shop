import React from 'react'
import { Link } from 'react-router-dom'
 
const Navbar = () => {
  return (
    <div className='navbar'>

      <div className='navlinks'>
        <Link to="/">HOME</Link>
        <Link to="shop">SHOP</Link>
        <Link to="help">HELP</Link>
        <Link className='cart-icon' to="cart">Insert cart icon</Link>
      </div>

      


    </div>
  )
}

export default Navbar