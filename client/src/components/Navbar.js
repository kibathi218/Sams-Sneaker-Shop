import React from 'react'
import { Link } from 'react-router-dom'
 
const Navbar = () => {
  return (
    <div className='navbar'>

      <div className='navlinks'>
        <Link to="/">HOME</Link>
        <Link to="shop">SHOP</Link>
        <Link to="reviews">REVIEWS</Link>
        <Link className='cart-icon' to="cart">CART</Link>
      </div>

      


    </div>
  )
}

export default Navbar