import { connect } from 'react-redux';
import UserView from './user-view';

const mapStateToProps = (state) => {
  return {
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const User = connect(mapStateToProps, mapDispatchToProps)(UserView)

export default User;
