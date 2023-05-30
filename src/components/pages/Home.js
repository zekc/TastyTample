import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import SearchPar from '../SearchBar/SearchBar';

function Home() {
  return (
    <>
      <HeroSection />
      <SearchPar />
      <Cards />
    </>
  );
}

export default Home;
