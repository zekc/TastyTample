/* eslint-disable react/style-prop-object */
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
       
        <Routes>
          
          <Route exact path='/'  element={<Home/>} />
          <Route exact path='/services' element={<Services/>} />
          <Route exact path='/products' element={<Products/>} />
          
        </Routes>
        <div className='signup'>
        <Routes>
        <Route exact path='/sign-up' element={<SignUp/>} />

        </Routes>
        </div>
      </Router>
      
    </>
  );
}

export default App;