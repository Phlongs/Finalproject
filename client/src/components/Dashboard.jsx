import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {orange500, grey400, indigo900, bluegrey500} from 'material-ui/styles/colors';

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


const styles = {
  errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    borderColor: grey400,
  },
  floatingLabelStyle: {
    color: indigo900,
  },
  floatingLabelFocusStyle: {
    color: bluegrey500,
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
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        /><span>  </span>

        <TextField
          floatingLabelText="Last Name"
          name="lastName"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        /><span>  </span>

        <TextField
          floatingLabelText="Phone Number"
          name="phone"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        /><span>  </span>

        <TextField
          floatingLabelText="Email"
          name="email"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        />
      </div>
      <div className="field-line">


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
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        /><span>  </span>

        <TextField
          floatingLabelText="Current Title"
          name="experience"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Please write a short paragraph about yourself and prior work experiences"
          name="about"
          style = {{width: 600}}
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Resume (requires link to your resume at google docs with public access)"
          name="resume"
          style = {{width: 600}}
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Name to Project 1"
          name="port1Name"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        /><span>  </span>
        <TextField
          floatingLabelText="Link to Project 1"
          name="port1"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Name to Project 2"
          name="port2Name"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        /><span>  </span>
        <TextField
          floatingLabelText="Link to Project 2"
          name="port2"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Name to Project 3"
          name="port3Name"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        /><span>  </span>
        <TextField
          floatingLabelText="Link to Project 3"
          name="port3"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        />
        </div>

        <div className="field-line">
          <TextField
            floatingLabelText="Name to Project 4"
            name="port4Name"
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          /><span>  </span>
          <TextField
            floatingLabelText="Link to Project 4"
            name="port4"
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          />
          </div>

          <div className="field-line">
            <TextField
              floatingLabelText="Name to Project 5"
              name="port5Name"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            /><span>  </span>
            <TextField
              floatingLabelText="Link to Project 5"
              name="port5"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            />
            </div>

            <div className="field-line">
              <TextField
                floatingLabelText="Name to Project 6"
                name="port6Name"
                floatingLabelStyle={styles.floatingLabelStyle}
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              /><span>  </span>
              <TextField
                floatingLabelText="Link to Project 6"
                name="port6"
                floatingLabelStyle={styles.floatingLabelStyle}
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              />
              </div>

      <RaisedButton
         containerElement="label" // <-- Just add me!
         label="Your Background Pic">
         <input type="file" name="backgroundPic" onChange={onChange}/>
      </RaisedButton>

      <div className="button-line">
        <RaisedButton className="red" type="submit" label="Preview Info" primary />
      </div>
    </form>

  </Card>

);



export default Dashboard;
