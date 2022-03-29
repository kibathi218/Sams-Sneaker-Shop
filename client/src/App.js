import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
      <Routes>
          <Route path="/" element={ <Home /> } />
      </Routes>
      </main>
      
    </div>
  );
}

export default App;
