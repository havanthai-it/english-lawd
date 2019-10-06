import React from 'react';
import { TextField } from '@material-ui/core';
import './signin-view.scss';

class Signin extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="signin-view">
        <form className="signin-form" autoComplete="off">
          {/* <div>
            <TextField label="Email" value={xxx} onChange={xxx()} />
          </div>
          <div>
            <TextField label="Username" value={xxx} onChange={xxx()} />
          </div> */}
        </form>
      </div>
    );
  }
}

export default Signin;
