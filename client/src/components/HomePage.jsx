import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';
import SimpleSlider from './SimpleSlider.jsx';
import Cards from './Cards.jsx';
import Footer from './Footer.jsx';


const HomePage = () => (
  <div>
  <SimpleSlider />
  <Cards />
  <Footer />
</div>
  );

export default HomePage;