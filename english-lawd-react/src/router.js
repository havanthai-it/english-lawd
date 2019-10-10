import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/home-container';
import About from './components/about/about-container';
import Guideline from './components/guideline/guideline-container';
import User from './components/user/user-container';
import Signin from './components/signin/signin-container';
import Signup from './components/signup/signup-container';


class RouterOutlet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/guideline" component={Guideline} />
        <Route exact path="/about" component={About} />
        <Route exact path="/user" component={User} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    );
  }
}

export default RouterOutlet;
