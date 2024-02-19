import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import NavBar from './components/NavBar';
import Registration from './components/Registration';
import { Reviews } from './components/Reviews';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
