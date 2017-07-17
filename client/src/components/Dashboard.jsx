import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {orange500, blueGrey900} from 'material-ui/styles/colors';

const cardStyle = {
  height: "90%",
  paddingTop: "20px",
  width: "60%",
  backgroundColor: "#fff"
}

const textStyle = {
  fontSize: "20px",
  backgroundColor: "#000"
}
const test = {
  color: "green"
}

const inputStyle = {
  errorStyle: {
    color: "orange500",
  },
  underlineStyle: {
    borderColor: "blueGrey900",
  },
  floatingLabelStyle: {
    color: "blueGrey900",
  },
  floatingLabelFocusStyle: {
    color: "blueGrey900",
  },
};



const Dashboard = ({
  secretData,
  onSubmit,
  onChange,
  userUpdate,
  user
  }) => (
  <Card style ={cardStyle} className="container">

    <CardTitle
      title="You're on your way to creating your very own website"
      subtitle="Please fill out form below:"
    />
    

    <form formMethod="post" onSubmit={onSubmit} >

      <div className="field-line">
        <TextField
          floatingLabelText="First Name"
          name="firstName"
          value={user.firstName}
          onChange={userUpdate}
          errorStyle={inputStyle.errorStyle}
          underlineStyle={inputStyle.underlineStyle}
          underlineFocusStyle={inputStyle.underlineStyle}
          floatingLabelStyle={inputStyle.floatingLabelStyle}
          floatingLabelFocusStyle={inputStyle.floatingLabelFocusStyle}
        /><span>  </span>

        <TextField
          floatingLabelText="Last Name"
          name="lastName"
          value={user.lastName}
          onChange={userUpdate}
          errorStyle={inputStyle.errorStyle}
          underlineStyle={inputStyle.underlineStyle}
          underlineFocusStyle={inputStyle.underlineStyle}
          floatingLabelStyle={inputStyle.floatingLabelStyle}
          floatingLabelFocusStyle={inputStyle.floatingLabelFocusStyle}
        /><span>  </span>

        <TextField
          floatingLabelText="Phone Number"
          name="phone"
          value={user.phone}
          onChange={userUpdate}
          errorStyle={inputStyle.errorStyle}
          underlineStyle={inputStyle.underlineStyle}
          underlineFocusStyle={inputStyle.underlineStyle}
          floatingLabelStyle={inputStyle.floatingLabelStyle}
          floatingLabelFocusStyle={inputStyle.floatingLabelFocusStyle}
        />
      </div>
      <div className="field-line">
        <TextField
          floatingLabelText="Email"
          name="email"
          value={user.email}
          onChange={userUpdate}
          errorStyle={inputStyle.errorStyle}
          underlineStyle={inputStyle.underlineStyle}
          underlineFocusStyle={inputStyle.underlineStyle}
          floatingLabelStyle={inputStyle.floatingLabelStyle}
          floatingLabelFocusStyle={inputStyle.floatingLabelFocusStyle}
        /><span>  </span>

      <RaisedButton
         containerElement="label" // <-- Just add me!
         label="My Profile Pic">
         <input type="file" name="profilePic" onChange={onChange}/>
      </RaisedButton>
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Education"
          name="education"
          value={user.education}
          onChange={userUpdate}
          errorStyle={inputStyle.errorStyle}
          underlineStyle={inputStyle.underlineStyle}
          underlineFocusStyle={inputStyle.underlineStyle}
          floatingLabelStyle={inputStyle.floatingLabelStyle}
          floatingLabelFocusStyle={inputStyle.floatingLabelFocusStyle}
        /><span>  </span>

        <TextField
          floatingLabelText="Current Title"
          name="experience"
          value={user.experience}
          onChange={userUpdate}
          errorStyle={inputStyle.errorStyle}
          underlineStyle={inputStyle.underlineStyle}
          underlineFocusStyle={inputStyle.underlineStyle}
          floatingLabelStyle={inputStyle.floatingLabelStyle}
          floatingLabelFocusStyle={inputStyle.floatingLabelFocusStyle}          
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Please write a short paragraph about yourself and prior work experiences"
          name="about"
          value={user.about}
          onChange={userUpdate}
          style = {{width: 600}}
          errorStyle={inputStyle.errorStyle}
          underlineStyle={inputStyle.underlineStyle}
          underlineFocusStyle={inputStyle.underlineStyle}
          floatingLabelStyle={inputStyle.floatingLabelStyle}
          floatingLabelFocusStyle={inputStyle.floatingLabelFocusStyle}          
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Name to Project 1"
          name="port1Name"
          value={user.port1Name}
          onChange={userUpdate}
          errorStyle={inputStyle.errorStyle}
          underlineStyle={inputStyle.underlineStyle}
          underlineFocusStyle={inputStyle.underlineStyle}
          floatingLabelStyle={inputStyle.floatingLabelStyle}
          floatingLabelFocusStyle={inputStyle.floatingLabelFocusStyle} 
        /><span>  </span>
        <TextField
          floatingLabelText="Link to Project 1"
          name="port1"
          value={user.port1}
          onChange={userUpdate}
          errorStyle={inputStyle.errorStyle}
          underlineStyle={inputStyle.underlineStyle}
          underlineFocusStyle={inputStyle.underlineStyle}
          floatingLabelStyle={inputStyle.floatingLabelStyle}
          floatingLabelFocusStyle={inputStyle.floatingLabelFocusStyle} 
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Name to Project 2"
          name="port2Name"
          value={user.port2Name}
          onChange={userUpdate}
          errorStyle={inputStyle.errorStyle}
          underlineStyle={inputStyle.underlineStyle}
          underlineFocusStyle={inputStyle.underlineStyle}
          floatingLabelStyle={inputStyle.floatingLabelStyle}
          floatingLabelFocusStyle={inputStyle.floatingLabelFocusStyle} 
        /><span>  </span>
        <TextField
          floatingLabelText="Link to Project 2"
          name="port2"
          value={user.port2}
          onChange={userUpdate}
          errorStyle={inputStyle.errorStyle}
          underlineStyle={inputStyle.underlineStyle}
          underlineFocusStyle={inputStyle.underlineStyle}
          floatingLabelStyle={inputStyle.floatingLabelStyle}
          floatingLabelFocusStyle={inputStyle.floatingLabelFocusStyle} 
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Name to Project 3"
          name="port3Name"
          value={user.port3Name}
          onChange={userUpdate}
          errorStyle={inputStyle.errorStyle}
          underlineStyle={inputStyle.underlineStyle}
          underlineFocusStyle={inputStyle.underlineStyle}
          floatingLabelStyle={inputStyle.floatingLabelStyle}
          floatingLabelFocusStyle={inputStyle.floatingLabelFocusStyle} 
        /><span>  </span>
        <TextField
          floatingLabelText="Link to Project 3"
          name="port3"
          value={user.port3}
          onChange={userUpdate}
          errorStyle={inputStyle.errorStyle}
          underlineStyle={inputStyle.underlineStyle}
          underlineFocusStyle={inputStyle.underlineStyle}
          floatingLabelStyle={inputStyle.floatingLabelStyle}
          floatingLabelFocusStyle={inputStyle.floatingLabelFocusStyle} 
        />
      </div>

      <RaisedButton
         containerElement="label" // <-- Just add me!
         label="Your Background Pic">
         <input type="file" name="backgroundPic" onChange={onChange}/>
      </RaisedButton>

      <div className="button-line">
        <RaisedButton type="submit" label="Preview Info" primary />
      </div>
    </form>

  </Card>

);



export default Dashboard;
