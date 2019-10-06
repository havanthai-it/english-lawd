import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/home-view';
import About from './components/about/about-view';
import Guideline from './components/guideline/guideline-view';
import User from './components/user/user-view';
import Signin from './components/signin/signin-view';
import Signup from './components/signup/signup-view';


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
