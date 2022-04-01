import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import Help from './components/Help';
import Cart from './components/Cart';
import fillerData from './data/filler-data';
import axios from 'axios';
import { BASE_URL } from './globals'
import ShoeDetails from './components/ShoeDetails';
import NewReview from './components/NewReview';


function App() {

  const [reviews, setReviews] = useState([])


  useEffect(() => {
    async function getAllReviews() {
      const res = await axios.get(`${BASE_URL}/reviews`)
      setReviews(res.data.reviews)
      console.log(reviews)
    }
    getAllReviews()
  }, [])


  // useEffect(() => {
  //   async function deleteReview() {
  //     const 
  //   }
  // })


  const [shoes, setShoes] = useState(fillerData)


  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
      <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/newReview" element={ <NewReview /> } />
          <Route path="shop" element={ <Shop shoes={ shoes } /> } />
          <Route path="shop/:id" element={ <ShoeDetails shoes={ shoes } /> } />
          <Route path="reviews" element={ <Help reviews={ reviews } /> } />
          <Route path="cart" element={ <Cart /> } />
      </Routes>
      </main>
      
    </div>
  );
}

export default App;
