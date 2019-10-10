import React from 'react';
import { Button } from '@material-ui/core';
import './home-view.scss';

class HomeView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-view">
        <h1 className="text-center">Hello Thai</h1>
        <div>
        The project needs another important addition: a utilities directory. This is a folder full of helper functions that are used globally. Keep your code DRY (Don’t Repeat Yourself) by exporting repeated logic to a singular location and importing it where used. Parts of your application can now share logic without copy-pasting by placing shared logic in this utilities directory. 
        </div>
        <div>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
        </div>
      </div>
    );
  }
}

export default HomeView;
