import React from 'react'
import Footer from './Footer'


const Shop = (props) => {
  return (
    <div className='shop'>
        <div className='coupon'>
            <h2>Save 20% on your first order by joining our rewards program!</h2>
        </div>

        <div className='row'>

        {props.shoes.map((shoe) => (
            <div className='shoe-box'>
                <img src={shoe.img} />
                <h2>{shoe.name}</h2>
                <h3>{shoe.price}</h3>
            </div>
        ))}
        </div>

        <Footer />
    </div>
  )
}

export default Shop