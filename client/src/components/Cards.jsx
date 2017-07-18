import React from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const Cards = () => (
  <div id="card-set">
  <Card id="card-1" className="landing-page-cards">
    <CardMedia >
      

    </CardMedia>
    <CardTitle title="Step 1" subtitle="Sign up" />
    <CardText>
      Simply signup and create a username.
    </CardText>
  </Card>

  <Card id="card-2" className="landing-page-cards">
    <CardMedia >
      

    </CardMedia>
    <CardTitle title="Step 2" subtitle="Fill out a form" />
    <CardText>
      Fill out a simple form and personalize it with a profile photo and a background photo.
    </CardText>
    
  </Card>

  <Card id="card-3" className="landing-page-cards">
    <CardMedia >

    </CardMedia>
    <CardTitle title="Step 3" subtitle="Create your very own Website" />
    <CardText>
          Create your own professional website in 3 easy steps!

    </CardText>
    
  </Card>
  </div>
);

export default Cards;