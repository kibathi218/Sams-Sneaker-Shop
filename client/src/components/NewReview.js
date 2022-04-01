import React, { useState } from 'react'
import axios from 'axios';
import { BASE_URL } from '../globals'
import { Link } from 'react-router-dom';

const NewReview = () => {

    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const [rating, setRating] = useState()
    const [shoe, setShoe] = useState("")

    const handleName = (event) => {
        setName(event.target.value)
    }
    const handleMessage = (event) => {
        setMessage(event.target.value)
    }
    const handleRating = (event) => {
        setRating(event.target.value)
    }
    const handleShoe = (event) => {
        setShoe(event.target.value)
    }

    const createReview = async () => {
        await axios.post(`${BASE_URL}/reviews`), {
            name: name,
            message: message,
            rating: rating,
            shoe: shoe
        }

    }
    


  return (
    <div className='new-review-page'>
        <input 
            placeholder='Please enter your name'
            type="text"
            name="name"
            required="required"
            onChange={(event) => handleName(event)}
        />
        <input 
            placeholder='Please enter your review'
            type="text"
            message="message"
            required="required"
            onChange={(event) => handleMessage(event)}
        />
        <input 
            placeholder='Please enter your rating (NUMBER BETWEEN 0-5)'
            type="number"
            rating="rating"
            required="required"
            onChange={(event) => handleRating(event)}
        />
        <input 
            placeholder="Please enter the shoe you're reviewing"
            type="text"
            shoe="shoe"
            required="required"
            onChange={(event) => handleShoe(event)}
        />
        
        
        <Link to="/reviews">BACK</Link>
        <button onClick={() => createReview()}>SUBMIT</button>
    </div>
  )
}

export default NewReview