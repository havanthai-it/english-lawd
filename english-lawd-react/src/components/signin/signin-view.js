import React from 'react';
import axios from 'axios';
import { TextField, Button, CircularProgress, Checkbox, FormControlLabel, Tooltip, Fab } from '@material-ui/core';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import API from '../../utils/api-utils';
import './signin-view.scss';
import CookieUtils from '../../utils/cookie-utils';

class SigninView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailErrorMsg: '',
      password: '',
      passwordErrorMsg: '',
      canSubmit: false,
      onSubmiting: false,
    }

    this.email = '';
    this.password = '';

    this.emailErrorMsg = '';
    this.passwordErrorMsg = '';

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
      <div className="signin-view">
        <div>
          <h2 className="text-center">Sign in</h2>
        </div>
        <form name="signinForm" className="signin-form" onSubmit={this.formSubmitHandler} autoComplete="off">
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
          <div>
            <Button type="submit" disabled={!this.state.canSubmit} variant="contained" color="primary">
              <span>Sign in</span>
              {this.state.onSubmiting ? <CircularProgress size={20} thickness={6} color="inherit"/> : null}
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

  checkValidForm() {
    if (this.emailErrorMsg === ''
      && this.passwordErrorMsg === ''
      && this.email && this.email.trim() !== ''
      && this.password && this.password.trim() !== '') {
      return true;
    }
    return false;
  }

  formSubmitHandler = async (event) => {
    event.preventDefault();
    this.setState({ onSubmiting: true });
    try {
      const config = {
        method: API.SIGN_IN.METHOD,
        url: API.SIGN_IN.URL,
        params: {
          email: this.state.email,
          password: this.state.password
        }
      };
      const response = await axios(config);
      if (response.data) {
        CookieUtils.setCookie('token', response.data.token, 7);
        this.setState({
          onSubmiting: false
        });

        window.location.href = '/';
      }
    } catch (error) {
      this.setState({
        onSubmiting: false
      });
      console.error(error);
    }
  }
}

export default SigninView;
