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
          <iframe width="420" height="315"
            src="https://www.youtube.com/embed/tgbNymZ7vqY">
          </iframe>
        </div>
        <div>
          The project needs another important addition: a utilities directory. This is a folder full of helper functions that are used globally. Keep your code DRY (Don’t Repeat Yourself) by exporting repeated logic to a singular location and importing it where used. Parts of your application can now share logic without copy-pasting by placing shared logic in this utilities directory. 
        </div>
        <div>
          The project needs another important addition: a utilities directory. This is a folder full of helper functions that are used globally. Keep your code DRY (Don’t Repeat Yourself) by exporting repeated logic to a singular location and importing it where used. Parts of your application can now share logic without copy-pasting by placing shared logic in this utilities directory. 
        </div>
      </div>
    );
  }
}

export default HomeView;
