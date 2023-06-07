/* eslint-disable react/style-prop-object */
import React from 'react';
import Navbar from './components/Navbar/index';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignUp from './components/pages/SignUp';
import Profile from './components/pages/profile';
import OtherProfile from './components/pages/otherprofile';
import OtherNancy from './components/FakePages/otherNancy';
import OtherAmber from './components/FakePages/otherAmber';

import Dish from './components/pages/dish';
import DishBurger from './components/FakePages/dishBurger';
import DishBrocoli from './components/FakePages/dishBrocoli';
import DishFrosty from './components/FakePages/dishFrosty';
import DishOreos from './components/FakePages/dishOreos';
import DishItalianChicken from './components/FakePages/dishItalianChicken';
import CreateRecipe from './components/pages/createRecipe';
import EditRecipe from './components/pages/editRecipe';

import EditProfile from './components/pages/editProfile';
import SavedRecipes from './components/pages/SavedRecipes';
import Following from './components/followings/DataArea';
import Follower from './components/followers/DataArea';
import ProtectedRoute from './ProtectedRoute';



function App() {
  return (
    <>
      <Router>
        <Navbar />
       
        <Routes>
          
          <Route exact path='/'  element={<Home/>} />
          <Route element={<ProtectedRoute />}>
          <Route exact path='/Profile' element={<Profile/>} />
          </Route>
          <Route exact path='/otherProfile' element={<OtherProfile/>} />
          <Route exact path='/otherAmber' element={<OtherAmber/>} />
          <Route exact path='/otherNancy' element={<OtherNancy/>} />

          <Route exact path='/dish' element={<Dish/>} />
          <Route exact path='/dishBurger' element={<DishBurger/>} />
          <Route exact path='/dishOreos' element={<DishOreos/>} />
          <Route exact path='/dishFrosty' element={<DishFrosty/>} />
          <Route exact path='/dishBrocoli' element={<DishBrocoli/>} />
          <Route exact path='/dishItalianChicken' element={<DishItalianChicken/>} />
          <Route exact path='/createRecipe' element={<CreateRecipe/>} />

          <Route exact path='/editRecipe' element={<EditRecipe/>} />

          <Route exact path='/sign-up' element={<SignUp/>} />
          <Route exact path='/editProfile' element={<EditProfile/>} />
          <Route exact path='/follower' element={<Follower/>} />
          <Route exact path='/following' element={<Following/>} />
          <Route exact path='/savedRecipes' element={<SavedRecipes/>} />



        </Routes>
       

      </Router>
      
    </>
  );
}

export default App;