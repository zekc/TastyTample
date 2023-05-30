import React from 'react';
import '../../App.css'
import { Button } from '../Button';
import './HeroSection.css';
import { getAuth } from 'firebase/auth';


function HeroSection() {

  const auth = getAuth()

  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>TASTY TEMPLE</h1>
      <p>Welcome {auth.currentUser?.email}</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
       
      </div>
    </div>
  );
}

export default HeroSection;