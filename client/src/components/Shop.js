import React from 'react'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'



const Shop = (props) => {

  let navigate = useNavigate()

  const showShoe = (shoe) => {
    navigate(`${shoe.id}`)
  }


  return (
    <div className='shop'>
        <div className='coupon'>
            <h2>Save 20% on your first order by joining our rewards program!</h2>
        </div>

        <div className='row'>

        {props.shoes.map((shoe) => (
            <div onClick={() => showShoe(shoe)} key={shoe.id} className='shoe-box'>
                <img src={shoe.img} />
                <h2>{shoe.name}</h2>
                <h2>{shoe.price}</h2>
            </div>
        ))}
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br />

        <Footer />
    </div>
  )
}

export default Shop