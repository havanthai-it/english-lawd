import React from 'react';
import { Container } from '@material-ui/core';
import RouterOutlet from '../../router';
import './body-view.scss';

class BodyView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="body-view">
        <Container maxWidth="xl">
          <RouterOutlet />
        </Container>
      </div>
    );
  }
}

export default BodyView;
