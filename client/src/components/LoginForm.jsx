import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import Button from './Button.jsx';
import TextField from 'material-ui/TextField';
import {orange500, blueGrey900} from 'material-ui/styles/colors';

const cardStyle = {
    height: "600px",
    paddingTop: "50px",
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

const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  successMessage,
  user
}) => (
  <Card style ={cardStyle} className="container">
    <form action="/" onSubmit={onSubmit}>
      <h1 className="card-heading"><i>Log in to...</i> <br/>view or update your profile.</h1>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField 
          floatingLabelText="Username"
          name="userName"
          errorText={errors.userName}
          errorStyle={inputStyle.errorStyle}
          underlineStyle={inputStyle.underlineStyle}
          underlineFocusStyle={inputStyle.underlineStyle}
          floatingLabelStyle={inputStyle.floatingLabelStyle}
          floatingLabelFocusStyle={inputStyle.floatingLabelFocusStyle}
          onChange={onChange}
          value={user.userName}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Password"
          type="password"
          name="password"
          onChange={onChange}
          errorText={errors.password}
          underlineStyle={inputStyle.underlineStyle}
          floatingLabelStyle={inputStyle.floatingLabelStyle}
          underlineFocusStyle={inputStyle.underlineStyle}
          floatingLabelFocusStyle={inputStyle.floatingLabelFocusStyle}
          errorStyle={inputStyle.errorStyle}
          value={user.password}
        />
      </div>

      <div>
        <Button type="submit" label="LOG IN" primary />
      </div>

      <CardText>Don't have an account? <Link className="login-link" to={'/signup'}>Create one</Link>.</CardText>
    </form>
  </Card>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;