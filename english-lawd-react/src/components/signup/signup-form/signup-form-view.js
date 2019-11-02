import React from 'react';
import axios from 'axios';
import { TextField, Button, CircularProgress, Checkbox, FormControlLabel, Tooltip, Fab } from '@material-ui/core';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import API from '../../../utils/api-utils';
import './signup-form-view.scss';

class SignupFormView extends React.Component {
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
      canSubmit: false,
      onSubmiting: false,
    }

    this.email = '';
    this.username = '';
    this.password = '';
    this.confirmPassword = '';

    this.emailErrorMsg = '';
    this.usernameErrorMsg = '';
    this.passwordErrorMsg = '';
    this.confirmPasswordErrorMsg = '';

    this.theme = createMuiTheme({
      overrides: {
        MuiTooltip: {
          tooltip: {
            fontFamily: 'inherit',
            color: '#ff0033',
            fontSize: '0.8em',
            lineHeight: '1em',
            backgroundColor: '#ffc4b7',
            maxWidth: '300px'
          }
        }
      }
    });
  }

  render() {
    return (
      <div className="signup-form-view">
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
              placeholder="john@example.com"
              required />
            {
              this.state.emailErrorMsg
                ? <span className="tooltip-error">
                  <MuiThemeProvider theme={this.theme}>
                    <Tooltip title={this.state.emailErrorMsg}>
                      <InfoRoundedIcon />
                    </Tooltip>
                  </MuiThemeProvider>
                </span>
                : null
            }
          </div>
          <div className="textfield-container">
            <label>Username</label>
            <TextField name="username"
              value={this.state.username}
              onChange={this.usernameChangeHandler}
              variant="outlined"
              placeholder="John Smiths"
              required />
            {
              this.state.usernameErrorMsg
                ? <span className="tooltip-error">
                  <MuiThemeProvider theme={this.theme}>
                    <Tooltip title={this.state.usernameErrorMsg}>
                      <InfoRoundedIcon />
                    </Tooltip>
                  </MuiThemeProvider>
                </span>
                : null
            }
          </div>
          <div className="textfield-container">
            <label>Password</label>
            <TextField name="password"
              type="password"
              value={this.state.password}
              onChange={this.passwordChangeHandler}
              variant="outlined"
              placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
              required />
            {
              this.state.passwordErrorMsg
                ? <span className="tooltip-error">
                  <MuiThemeProvider theme={this.theme}>
                    <Tooltip title={this.state.passwordErrorMsg}>
                      <InfoRoundedIcon />
                    </Tooltip>
                  </MuiThemeProvider>
                </span>
                : null
            }
          </div>
          <div className="textfield-container">
            <label>Confirm password</label>
            <TextField name="confirmPassword"
              type="password"
              value={this.state.confirmPassword}
              onChange={this.confirmPasswordChangeHandler}
              variant="outlined"
              placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
              required />
            {
              this.state.confirmPasswordErrorMsg
                ? <span className="tooltip-error">
                  <MuiThemeProvider theme={this.theme}>
                    <Tooltip title={this.state.confirmPasswordErrorMsg}>
                      <InfoRoundedIcon />
                    </Tooltip>
                  </MuiThemeProvider>
                </span>
                : null
            }
          </div>
          <div>
            <FormControlLabel
              control={
                <Checkbox checked={true} color="primary" required />
              }
              label="I agree with the policy..."
            />
          </div>
          <div>
            <Button type="submit" disabled={!this.state.canSubmit} variant="contained" color="secondary">
              <span>Sign up</span>
              {this.state.onSubmiting ? <CircularProgress size={20} thickness={6} color="primary" /> : null}
            </Button>
          </div>
        </form>
      </div>
    );
  }

  emailChangeHandler = (event) => {
    this.email = event.target.value;
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.email.match(pattern)) {
      this.emailErrorMsg = '';
    } else {
      this.emailErrorMsg = 'Email is invalid';
    }
    this.setState({ emailErrorMsg: this.emailErrorMsg });
    this.setState({ email: this.email });
    this.setState({ canSubmit: this.checkValidForm() });
  }

  usernameChangeHandler = (event) => {
    this.username = event.target.value;
    this.username = this.username.replace(/\s\s+/g, ' ');
    const pattern = /^[A-Za-z][A-Za-z\s]{5,32}$/;
    if (this.username.match(pattern)) {
      this.usernameErrorMsg = '';
    } else {
      this.usernameErrorMsg = 'Username must be between 6 to 32 characters which contain only letters, and space';
    }
    this.setState({ usernameErrorMsg: this.usernameErrorMsg });
    this.setState({ username: this.username });
    this.setState({ canSubmit: this.checkValidForm() });
  }

  passwordChangeHandler = (event) => {
    this.password = event.target.value;
    const pattern = /^[0-9A-Za-z_@#]{6,}$/;
    if (this.password.match(pattern)) {
      this.passwordErrorMsg = '';
    } else {
      this.passwordErrorMsg = 'Password must be at least 6 characters long which contain only letters, numberic digits, underscore';
    }
    this.setState({ passwordErrorMsg: this.passwordErrorMsg });
    this.setState({ password: this.password });
    this.setState({ canSubmit: this.checkValidForm() });
  }

  confirmPasswordChangeHandler = (event) => {
    this.confirmPassword = event.target.value;
    if (this.confirmPassword === this.state.password) {
      this.confirmPasswordErrorMsg = '';
    } else {
      this.confirmPasswordErrorMsg = 'Password doesn\'t match';
    }
    this.setState({ confirmPasswordErrorMsg: this.confirmPasswordErrorMsg });
    this.setState({ confirmPassword: this.confirmPassword });
    this.setState({ canSubmit: this.checkValidForm() });
  }

  checkValidForm() {
    if (this.emailErrorMsg === ''
      && this.usernameErrorMsg === ''
      && this.passwordErrorMsg === ''
      && this.confirmPasswordErrorMsg === ''
      && this.email && this.email.trim() !== ''
      && this.username && this.username.trim() !== ''
      && this.password && this.password.trim() !== ''
      && this.confirmPassword && this.confirmPassword.trim() !== '') {
      return true;
    }
    return false;
  }

  formSubmitHandler = async (event) => {
    event.preventDefault();
    this.setState({ onSubmiting: true });
    try {
      const config = {
        method: API.SIGN_UP.METHOD,
        url: API.SIGN_UP.URL,
        data: {
          email: this.state.email,
          username: this.state.username,
          password: this.state.password
        }
      };
      const response = await axios(config);
      if (response.data) {
        this.setState({
          onSubmiting: false
        });

        // ACTION
        this.props.openSignupSuccessBox(true);

      }
    } catch (error) {
      this.setState({
        onSubmiting: false
      });
      console.error(error);
    }
  }
}

export default SignupFormView;
