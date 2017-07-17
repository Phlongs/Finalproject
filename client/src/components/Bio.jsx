import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardTitle, CardText } from 'material-ui/Card';

const cardStyle = {
  height: "90%",
  paddingTop: "20px",
  width: "60%",
  backgroundColor: "#fff"
}

const Bio = ({ user }) =>(

  <Card style ={cardStyle} className="container">

    <CardTitle
      title="Preview Info"
      subtitle="Please make sure info is correct below:"
    />

    <div className = "container">
    <div className = "bio">
    <h2>Profile Pic:</h2>
    <img style={{ width: 200, height: 200 }} src={user.profilePic}/>

    <h2>First Name: {user.firstName} Last Name: {user.lastName}</h2>

    <h2>About:</h2>
    {user.about}

    <h2>Education: </h2>
    {user.education}

    <h2>Current Title: </h2>
    {user.experience}

    <h2>Portfolio: </h2>
    <a href={user.port1} className="red">{user.port1Name}</a>
    <a href={user.port2} className="red">{user.port2Name}</a>
    <a href={user.port3} className="red">{user.port3Name}</a>

    <h2>Contact info: </h2>
    <text>Phone: {user.phone}</text>
    <text>Email: {user.email}</text>

    <h2>Background Image: </h2>
    <img style={{ width: 200, height: 200 }} src={user.backgroundPic} />

	<CardText>If all of your info is correct <a href={'/public/userProfile/'+user.userName}  target="_blank" className="red">Check out your Website!!</a>.</CardText>
    </div>
    </div>
    </Card>

);

export default Bio;
