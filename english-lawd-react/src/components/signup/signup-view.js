import React from 'react';
import SignupForm from './signup-form/signup-form-container';
import SignupSuccessBox from './signup-success-box/signup-success-box-container';
import './signup-view.scss';

class SignupView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="signup-view">
        { this.props.isSignupSuccess ? <SignupSuccessBox /> : <SignupForm /> }
      </div>
    );
  }

}

export default SignupView;
