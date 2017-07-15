import React, { Component } from 'react';
import Slider from 'react-slick';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';


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
          <ul className="slide-text">
            <li id="slide-header">BioBuild</li>
            <li id="slide-header">Save Time. Be noticed.</li>
            <li id="slide-subheader">Create your professional web presence in minutes!</li>
          </ul>
            {"\n"}
            {"\n"}
        <div id="card-set">
        <Card id="card-1" className="landing-page-cards">
          <CardMedia >
            <i className="fa fa-rocket fa-3x" aria-hidden="true"></i>

          </CardMedia>
          <CardTitle title="Fast" subtitle="Create a profile in minutes." />
          <CardText>
            Simply fill out a form, and you're done!
          </CardText>
        </Card>

        <Card id="card-2" className="landing-page-cards">
          <CardMedia >
            <i className="fa fa-star fa-3x" aria-hidden="true"></i>

          </CardMedia>
          <CardTitle title="Impressive" subtitle="Create a memorable web presence." />
          <CardText>
            Have the freedom to portray who you are outside of a boring resume.
          </CardText>
          
        </Card>

        <Card id="card-3" className="landing-page-cards">
          <CardMedia >
        <i className="fa fa-paint-brush fa-3x" aria-hidden="true"></i>
          </CardMedia>
          <CardTitle title="Dynamic" subtitle="Free to update" />
          <CardText>
                You can make as many updates to your page that you'd like.

          </CardText>
          
        </Card>
        </div>
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