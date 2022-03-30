import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import Help from './components/Help';
import Cart from './components/Cart';
import fillerData from './data/filler-data';

function App() {
  const [shoes, setShoes] = useState(fillerData)


  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
      <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="shop" element={ <Shop shoes={ shoes } /> } />
          <Route path="help" element={ <Help /> } />
          <Route path="cart" element={ <Cart /> } />
      </Routes>
      </main>
      
    </div>
  );
}

export default App;
