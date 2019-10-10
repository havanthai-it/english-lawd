import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '@material-ui/core';
import './header-view.scss';


class HeaderView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header-view">
        <Container maxWidth="lg">
          <header>
            <div className="logo-container">
              LOGO
            </div>
            <div className="nav-horizontal">
              <nav>
                <ul>
                  <li><Link to="/guideline">Guideline</Link></li>
                  <li><Link to="/about">About</Link></li>
                </ul>
              </nav>
            </div>
            <div className="action-button-container">
              <Link to="/signin"><Button variant="contained" color="primary">Sign in</Button></Link>
              &nbsp;or&nbsp;
              <Link to="/signup"><Button variant="contained" color="secondary">Sign up</Button></Link>
            </div>
          </header>
        </Container>
      </div>
    );
  }
}

export default HeaderView;
