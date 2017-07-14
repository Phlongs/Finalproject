import React, { Component } from 'react'
import Slider from 'react-slick'

const SimpleSlider = React.createClass({
  render() {

    var settings = {
      infinite: true,
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      fade: true,
      initialSlide: 0,
      responsive: [{
        breakpoint: 1542,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    };
    return (
      <Slider {...settings}>
    
        <div>
        <div id="slide-1" className="slide-style slide-text">

            <h1>BioBuild</h1>
            <h3>Save Time. Be Noticed.</h3>
            <h6>Create your professional web presence in minutes!</h6>

        </div>
        </div>
         { /*<div>
        <div id="slide-2" className="slide-style"><h1 className="slide-text">hi</h1></div>
        </div> */}
      </Slider>
    );
  }
});
module.exports = SimpleSlider;