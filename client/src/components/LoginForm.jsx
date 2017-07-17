import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import Button from './Button.jsx';
import TextField from 'material-ui/TextField';
import {orange500, grey400, indigo900, bluegrey500} from 'material-ui/styles/colors';

const cardStyle = {
    height: "600px",
    paddingTop: "50px",
    width: "460px",
    backgroundColor: "#fff"
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
          errorStyle={styles.errorStyle}
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
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
          errorStyle={styles.errorStyle}
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
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