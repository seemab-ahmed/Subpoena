import React from 'react';
import Banner from '../components/Banner';
import FullService from '../components/FullService';
import MakeEasy from '../components/MakeEasy';
import Testimonial from '../components/Tetimonial';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function Home() {
  return (
    <>
      <Banner />
      <FullService />
      <MakeEasy />
      <Testimonial />
    </>
  );
}

export default Home;
