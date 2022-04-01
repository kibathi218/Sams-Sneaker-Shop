import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



const ShoeDetails = (props) => {

  const [selectedShoe, setShoe] = useState('')

  let { id } = useParams()

  useEffect(() => {
    let selectedShoe = props.shoes.find(
      (shoe) => shoe.id === parseInt(id)
    )
    setShoe(selectedShoe)
  }, [props.shoe, id])



  return (
    <div className='shoe-details'>
      <img  src={selectedShoe.img} />

      <div className='shoe-text'>
        <h1>{selectedShoe.name}</h1>
        <h2>{selectedShoe.price}</h2>
        <h3>{selectedShoe.description}</h3>
        <button>Buy Now</button>
      </div>
        
    </div>
  )
}

export default ShoeDetails