import React from 'react';
import axios from 'axios';
import { TextField, Button } from '@material-ui/core';
import api from '../../utils/api-pool';
import './signup-view.scss';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailErrorMsg: '',
      username: '',
      usernameErrorMsg: '',
      password: '',
      passwordErrorMsg: '',
      confirmPassword: '',
      confirmPasswordErrorMsg: '',
      canSubmit: false
    };
    this.emailErrorMsg = '';
    this.usernameErrorMsg = '';
    this.passwordErrorMsg = '';
    this.confirmPasswordErrorMsg = '';
  }

  render() {
    return (
      <div className="signup-view">
        <div>
          <h2 className="text-center">Sign up</h2>
        </div>
        <form name="signupForm" className="signup-form" onSubmit={this.formSubmitHandler} autoComplete="off">
          <div className="textfield-container">
            <label>Email</label>
            <TextField name="email" 
              value={this.state.email} 
              onChange={this.emailChangeHandler} 
              variant="outlined"
              placeholder="john@example.com" />
            <div className="textfield-error-message">{this.state.emailErrorMsg ? this.state.emailErrorMsg : ''}</div>
          </div>
          <div className="textfield-container">
            <label>Username</label>
            <TextField name="username" 
              value={this.state.username} 
              onChange={this.usernameChangeHandler} 
              variant="outlined"
              placeholder="John Smiths" />
            <div className="textfield-error-message">{this.state.usernameErrorMsg}</div>
          </div>
          <div className="textfield-container">
            <label>Password</label>
            <TextField name="password" 
              type="password" 
              value={this.state.password} 
              onChange={this.passwordChangeHandler} 
              variant="outlined"
              placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" />
            <div className="textfield-error-message">{this.state.passwordErrorMsg}</div>
          </div>
          <div className="textfield-container">
            <label>Confirm password</label>
            <TextField name="confirmPassword" 
              type="password" 
              value={this.state.confirmPassword} 
              onChange={this.confirmPasswordChangeHandler} 
              variant="outlined"
              placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" />
            <div className="textfield-error-message">{this.state.confirmPasswordErrorMsg}</div>
          </div>
          <div>
            <Button type="submit" disabled={!this.state.canSubmit} variant="contained" color="secondary">Sign up</Button>
          </div>
        </form>
      </div>
    );
  }

  emailChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value.match(pattern)) {
      this.emailErrorMsg = '';
    } else {
      this.emailErrorMsg = 'Email is invalid';
    }
    this.setState({ emailErrorMsg: this.emailErrorMsg });
    this.setState({ [name]: value });
    this.setState({ canSubmit: this.checkValidForm() });
  }

  usernameChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    value = value.replace(/\s\s+/g, ' ');
    const pattern = /^[A-Za-z][A-Za-z\s]{5,32}$/;
    if (value.match(pattern)) {
      this.usernameErrorMsg = '';
    } else {
      this.usernameErrorMsg = 'Username must be between 6 to 32 characters which contain only letters, and space';
    }
    this.setState({ usernameErrorMsg: this.usernameErrorMsg });
    this.setState({ [name]: value });
    this.setState({ canSubmit: this.checkValidForm() });
  }

  passwordChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    const pattern = /^[0-9A-Za-z_@#]{6,}$/;
    if (value.match(pattern)) {
      this.passwordErrorMsg = '';
    } else {
      this.passwordErrorMsg = 'Password must be at least 6 characters long which contain only letters, numberic digits, underscore';
    }
    this.setState({ passwordErrorMsg: this.passwordErrorMsg });
    this.setState({ [name]: value });
    this.setState({ canSubmit: this.checkValidForm() });
  }

  confirmPasswordChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    if (value === this.state.password) {
      this.confirmPasswordErrorMsg = '';
    } else {
      this.confirmPasswordErrorMsg = 'Password doesn\'t match';
    }
    this.setState({ confirmPasswordErrorMsg: this.confirmPasswordErrorMsg });
    this.setState({ [name]: value });
    this.setState({ canSubmit: this.checkValidForm() });
  }

  checkValidForm() {
    if (this.emailErrorMsg === ''
      && this.usernameErrorMsg === ''
      && this.passwordErrorMsg === ''
      && this.confirmPasswordErrorMsg === '') {
      return true;
    }
    return false;
  }

  formSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios({
        method: api.signup.method,
        url: api.signup.url,
        data: {
          email: this.state.email,
          username: this.state.username,
          password: this.state.password
        }
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
}

export default Signup;
