/* eslint-disable react/style-prop-object */
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignUp from './components/pages/SignUp';
import Profile from './components/pages/profile';
import OtherProfile from './components/pages/otherprofile';

import Dish from './components/pages/dish';
import CreateRecipe from './components/pages/createRecipe';
import EditRecipe from './components/pages/editRecipe';

import Footer from './components/Footer';
import EditProfile from './components/pages/editProfile';
import Following from './components/followings/DataArea';
import Follower from './components/followers/DataArea';




function App() {
  return (
    <>
      <Router>
        <Navbar />
       
        <Routes>
          
          <Route exact path='/'  element={<Home/>} />
          <Route exact path='/Profile' element={<Profile/>} />
          <Route exact path='/otherprofile' element={<OtherProfile/>} />

          <Route exact path='/dish' element={<Dish/>} />
          <Route exact path='/createRecipe' element={<CreateRecipe/>} />

          <Route exact path='/editRecipe' element={<EditRecipe/>} />

          <Route exact path='/sign-up' element={<SignUp/>} />
          <Route exact path='/editProfile' element={<EditProfile/>} />
          <Route exact path='/follower' element={<Follower/>} />
          <Route exact path='/following' element={<Following/>} />



        </Routes>
       

        <Footer />
      </Router>
      
    </>
  );
}

export default App;