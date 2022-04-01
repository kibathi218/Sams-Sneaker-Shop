import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../globals'

const Help = (props) => {

  const deleteReview = async () => {
    await axios.delete(`${BASE_URL}/reviews/:${props.reviews.id}`)

  }

  


  return (



    <div>

      


      <h1 className='review-header'>Reviews:</h1>

      <div className='review-add'>
        <a href='/newReview'><button>ADD</button></a>
      </div>
    
    <div className='review-page'>
      
      
      

        {props.reviews.map((review) => (
          <div className='review-block' key={review._id}>
          <h1>{review.name}</h1>
          <h3>{review.message}</h3>
          <h3>{`${review.rating}/5`}</h3>
          <h3>{review.shoe}</h3>
          <h2 onClick={() => deleteReview()}>X</h2>
          </div>
          
         ))}
         


      </div>

      </div>
    
  )}

export default Help