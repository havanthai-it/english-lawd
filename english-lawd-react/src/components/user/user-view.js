import React from 'react';
import '../../app.scss';

class UserView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="user-view">
        <h1 className="text-center">User page</h1>
      </div>
    );
  }
}

export default UserView;
