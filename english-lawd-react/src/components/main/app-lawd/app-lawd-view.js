import React from 'react';
import { Grid } from '@material-ui/core';
import './app-lawd-view.scss';

class AppLawdView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-lawd-view">
        <Grid container spacing={0}>
          <Grid item xs={12} lg={6}>
            <div className="video-wrapper">
              <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
            </div>
          </Grid>
          <Grid item xs={12} lg={6}>
            Text...
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default AppLawdView;
