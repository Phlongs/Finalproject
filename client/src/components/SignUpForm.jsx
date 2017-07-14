import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import Button from './Button.jsx';
import TextField from 'material-ui/TextField';
import {orange500, blueGrey900} from 'material-ui/styles/colors';

const cardStyle = {
  height: "700px",
  paddingTop: "20px",
  width: "460px",
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


const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
  <Card style ={cardStyle} className="container">

    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Sign up to...<br />land more interviews & <br /> get employed sooner.</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          floatingLabelText="Name"
          name="name"
          errorText={errors.name}
          onChange={onChange}
          value={user.name}
          errorStyle={inputStyle.errorStyle}
          underlineStyle={inputStyle.underlineStyle}
          underlineFocusStyle={inputStyle.underlineStyle}
          floatingLabelStyle={inputStyle.floatingLabelStyle}
          floatingLabelFocusStyle={inputStyle.floatingLabelFocusStyle}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Create Username"
          name="userName"
          errorText={errors.userName}
          onChange={onChange}
          value={user.userName}
          underlineStyle={inputStyle.underlineStyle}
          floatingLabelStyle={inputStyle.floatingLabelStyle}
          underlineFocusStyle={inputStyle.underlineStyle}
          floatingLabelFocusStyle={inputStyle.floatingLabelFocusStyle}
          errorStyle={inputStyle.errorStyle}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Password"
          type="password"
          name="password"
          onChange={onChange}
          errorText={errors.password}
          value={user.password}
        />
      </div>

      <div className="button-line">
        <Button type="submit" label="Create New Account" primary />
      </div>

      <CardText>Already have an account? <Link className="login-link" to={'/login'}>Log in</Link></CardText>
    </form>
  </Card>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;