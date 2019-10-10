import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import './signup-success-box-view.scss'

class SignupSuccessBoxView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="signup-success-box-view text-center">
        <div className="check-circle-outline-icon">
          <CheckCircleOutlineIcon />
        </div>
        <div>
          <h2>You have signed up</h2>
          <h2>successfully</h2>
        </div>
        <div>
          <div>Thank you! We are glad you are with us!</div>
          <div>You can start learning now by click sign in button below.</div>
        </div>
        <div>
          <Link to="/signin"><Button variant="contained" color="primary">Sign in</Button></Link>
        </div>
      </div>
    );
  }
}

export default SignupSuccessBoxView;
