import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/home-view';
import User from './components/user/user-view';


class RouterOutlet extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/user" component={User} />
            </Switch>
        );
    }
}

export default RouterOutlet;