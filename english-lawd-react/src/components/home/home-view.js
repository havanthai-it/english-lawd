import React from 'react';
import './home-view.scss';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home-page">
                <h1 className="text-center">Hello Thai</h1>
            </div>
        );
    }
}

export default Home;
