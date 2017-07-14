import React from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const Cards = () => (
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
);

export default Cards;