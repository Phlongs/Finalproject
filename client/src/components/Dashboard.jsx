import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const Dashboard = ({
  secretData,
  onSubmit,
  onChange,
  user
  }) => (
  <div className="container">

    <Card>
    <CardTitle
      title="You're on your way to creating your very own website"
      subtitle="Please fill out form below:"
    />

    {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardText>}

    </Card>

    <form formMethod="post" onSubmit={onSubmit} >
      <h2 className="card-heading">Form</h2>

      <div className="field-line">
        <TextField
          floatingLabelText="First Name"
          name="firstName"

        />
      </div>
      <div className="field-line">
        <TextField
          floatingLabelText="Last Name"
          name="lastName"

        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Phone Number"
          name="phone"

        />
      </div>
      <div className="field-line">
        <TextField
          floatingLabelText="email"
          name="email"

        />
      </div>

      <RaisedButton
         containerElement="label" // <-- Just add me!
         label="My Profile Pic">
         <input type="file" name="profilePic" onChange={onChange}/>
      </RaisedButton>

      <div className="field-line">
        <TextField
          floatingLabelText="Education"
          name="education"

        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Current Title"
          name="experience"
        />
      </div>
      <div className="field-line">
        <TextField
          floatingLabelText="Please write a short paragraph about yourself and prior work experiences"
          name="about"
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Name to Project 1"
          name="port1Name"
        />
        <TextField
          floatingLabelText="Link to Project 1"
          name="port1"
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Name to Project 2"
          name="port2Name"
        />
        <TextField
          floatingLabelText="Link to Port 2"
          name="port2"
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Name to Project 3"
          name="port3Name"
        />
        <TextField
          floatingLabelText="Link to Port 3"
          name="port3"
        />
      </div>

      <RaisedButton
         containerElement="label" // <-- Just add me!
         label="Your Background Pic">
         <input type="file" name="backgroundPic" onChange={onChange}/>
      </RaisedButton>

      <RaisedButton
         containerElement="label" // <-- Just add me!
         label="Resume">
         <input type="file" name="resume" onChange={onChange}/>
      </RaisedButton>

      <div className="button-line">
        <RaisedButton type="submit" label="Preview Info" primary />
      </div>


    </form>

  </div>

);

// Dashboard.propTypes = {
//   secretData: PropTypes.string.isRequired,
//
// };

export default Dashboard;
