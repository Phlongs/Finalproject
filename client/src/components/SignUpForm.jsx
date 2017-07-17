import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import Button from './Button.jsx';
import TextField from 'material-ui/TextField';
import {orange500, grey400, indigo900, bluegrey500} from 'material-ui/styles/colors';

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
          errorStyle={styles.errorStyle}
          underlineStyle={styles.underlineStyle}
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Create Username"
          name="userName"
          errorText={errors.userName}
          onChange={onChange}
          value={user.userName}
          errorStyle={styles.errorStyle}
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
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
          errorStyle={styles.errorStyle}
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
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