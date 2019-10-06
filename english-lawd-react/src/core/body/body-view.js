import React from 'react';
import { Container } from '@material-ui/core';
import RouterOutlet from '../../router';
import './body-view.scss';

class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="body-view">
        <Container maxWidth="md">
          <RouterOutlet />
        </Container>
      </div>
    );
  }
}

export default Body;
