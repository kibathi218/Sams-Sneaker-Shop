import React from 'react'
import Footer from './Footer'

const Help = (props) => {
  return (

    <div>


      <h1 className='review-header'>Reviews:</h1>
    
    <div className='review-page'>
      

      {props.reviews.map((review) => (
        <div className='review-block'>
        <h1>{review.name}</h1>
        <h3>{review.message}</h3>
        <h3>{`${review.rating}/5`}</h3>
        <h3>{review.shoe}</h3>
        </div>
      ))}

      </div>

      </div>
    
  )}

export default Help