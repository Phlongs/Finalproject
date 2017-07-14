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
  uploadRes,
  user
  }) => (
  <Card style ={cardStyle} className="container">

    <CardTitle
      title="You're on your way to creating your very own website"
      subtitle="Please fill out form below:"
    />
    {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardText>}

    <form formMethod="post" onSubmit={onSubmit} >

      <div className="field-line">
        <TextField
          floatingLabelText="First Name "
          name="firstName"
          errorStyle={inputStyle.errorStyle}
          underlineStyle={inputStyle.underlineStyle}
          underlineFocusStyle={inputStyle.underlineStyle}
          floatingLabelStyle={inputStyle.floatingLabelStyle}
          floatingLabelFocusStyle={inputStyle.floatingLabelFocusStyle}
        />

        <TextField
          floatingLabelText="Last Name"
          name="lastName"
          errorStyle={inputStyle.errorStyle}
          underlineStyle={inputStyle.underlineStyle}
          underlineFocusStyle={inputStyle.underlineStyle}
          floatingLabelStyle={inputStyle.floatingLabelStyle}
          floatingLabelFocusStyle={inputStyle.floatingLabelFocusStyle}
        />

        <TextField
          floatingLabelText="Phone Number"
          name="phone"
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
          errorStyle={inputStyle.errorStyle}
          underlineStyle={inputStyle.underlineStyle}
          underlineFocusStyle={inputStyle.underlineStyle}
          floatingLabelStyle={inputStyle.floatingLabelStyle}
          floatingLabelFocusStyle={inputStyle.floatingLabelFocusStyle}
        />


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
          errorStyle={inputStyle.errorStyle}
          underlineStyle={inputStyle.underlineStyle}
          underlineFocusStyle={inputStyle.underlineStyle}
          floatingLabelStyle={inputStyle.floatingLabelStyle}
          floatingLabelFocusStyle={inputStyle.floatingLabelFocusStyle}
        />

        <TextField
          floatingLabelText="Current Title"
          name="experience"
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
          errorStyle={inputStyle.errorStyle}
          underlineStyle={inputStyle.underlineStyle}
          underlineFocusStyle={inputStyle.underlineStyle}
          floatingLabelStyle={inputStyle.floatingLabelStyle}
          floatingLabelFocusStyle={inputStyle.floatingLabelFocusStyle} 
        />
        <TextField
          floatingLabelText="Link to Project 1"
          name="port1"
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
          errorStyle={inputStyle.errorStyle}
          underlineStyle={inputStyle.underlineStyle}
          underlineFocusStyle={inputStyle.underlineStyle}
          floatingLabelStyle={inputStyle.floatingLabelStyle}
          floatingLabelFocusStyle={inputStyle.floatingLabelFocusStyle} 
        />
        <TextField
          floatingLabelText="Link to Port 2"
          name="port2"
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
          errorStyle={inputStyle.errorStyle}
          underlineStyle={inputStyle.underlineStyle}
          underlineFocusStyle={inputStyle.underlineStyle}
          floatingLabelStyle={inputStyle.floatingLabelStyle}
          floatingLabelFocusStyle={inputStyle.floatingLabelFocusStyle} 
        />
        <TextField
          floatingLabelText="Link to Port 3"
          name="port3"
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
