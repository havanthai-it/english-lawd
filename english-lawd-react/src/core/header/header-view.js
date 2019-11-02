import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Avatar, Fab, MenuList, MenuItem, Popper, Grow, Paper, ClickAwayListener } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './header-view.scss';
import blankAvatar from '../../assets/img/blank-profile.png';

class HeaderView extends React.Component {
  constructor(props) {
    super(props);

    this.menuRef = React.createRef();

    this.state = {
      openUserMenu: false,
    }

    this.user = {
      username: 'Ha Van Thai',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNnVIAmeH2UH_-FxkA9s-KzYEe3SRrjMo8czhkOJLOs0788pUC'
    };

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
              {
                this.user
                  ? <div>
                    <span class="user-name">Ha Van Thai</span>
                    <Fab aria-label={this.user.username}
                      ref={this.menuRef}
                      onClick={this.handleToggle}
                      aria-controls="menu-list-grow"
                      aria-haspopup="true">
                      <Avatar alt={this.user.username} src={this.user.avatar} />
                    </Fab>
                    <Popper open={this.state.openUserMenu} anchorEl={this.menuRef.current} keepMounted transition disablePortal>
                      {({ TransitionProps, placement }) => (
                        <Grow
                          {...TransitionProps}
                          style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom', width: this.state.openUserMenu ? '200px' : '0px' }}
                        >
                          <Paper id="menu-list-grow">
                            <ClickAwayListener onClickAway={this.handleClose}>
                              <MenuList autoFocusItem={this.state.openUserMenu} onKeyDown={this.handleListKeyDown}>
                                <MenuItem onClick={this.handleClose}>
                                  <SettingsIcon />
                                  Setting
                                </MenuItem>
                                <MenuItem onClick={this.handleClose}>
                                  <StarBorderIcon />
                                  Upgrade
                                </MenuItem>
                                <MenuItem onClick={this.handleClose}>
                                  <ExitToAppIcon />
                                  Sign out
                                </MenuItem>
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Popper>
                  </div>
                  : <div>
                    <Link to="/signin"><Button variant="contained" color="primary">Sign in</Button></Link>
                    &nbsp;or&nbsp;
                    <Link to="/signup"><Button variant="contained" color="secondary">Sign up</Button></Link>
                  </div>
              }
            </div>

          </header>
        </Container>
      </div>
    );
  }

  handleToggle = () => {
    this.setState({ openUserMenu: !this.state.openUserMenu });
  };

  handleClose = (event) => {
    if (this.menuRef.current && this.menuRef.current.contains(event.target)) {
      return;
    }

    this.setState({ openUserMenu: false });
  };

  handleListKeyDown = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      this.setState({ openUserMenu: false });
    }
  }
}

export default HeaderView;
