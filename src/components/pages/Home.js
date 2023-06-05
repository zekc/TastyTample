import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import SearchPar from '../SearchBar/SearchBar';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <SearchPar />
      <Cards />
      
      <Footer />
    </>
  );
}

export default Home;
