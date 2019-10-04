import React from 'react';
import RouterOutlet from './router';
import Home from './components/home/home-view';
import User from './components/user/user-view';


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                <div>Header</div>
                <RouterOutlet />
            </div>
        );
    }
}

export default App;
