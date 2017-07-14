import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardTitle, CardText } from 'material-ui/Card';

const Bio = ({ user }) =>(

    <div className = "container">

    <h2>Profile Pic:</h2>
    <img src={user.profilePic}/>

    <h2>First Name: {user.firstName} Last Name: {user.lastName}</h2>

    <h2>About:</h2>
    {user.about}

    <h2>Education: </h2>
    {user.education}

    <h2>Current Title: </h2>
    {user.experience}

    <h2>Portfolio: </h2>
    <a href={user.port1}>{user.port1Name}</a>
    <a href={user.port2}>{user.port2Name}</a>
    <a href={user.port3}>{user.port3Name}</a>

    <h2>Contact info: </h2>
    <text>Phone: {user.phone}</text>
    <text>Email: {user.email}</text>

    <h2>Background Image: </h2>
    <img style={{ width: 200, height: 200 }} src={user.backgroundPic} />

	<CardText>If all of your info is correct <a href={'/public/userProfile/'+user.userName}>Check out your Website!!</a>.</CardText>
    </div>

);

export default Bio;
