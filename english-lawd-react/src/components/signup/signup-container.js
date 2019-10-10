import { connect } from 'react-redux';
import SignupView from './signup-view';

const mapStateToProps = (state) => {
  return {
    isSignupSuccess: state.signupReducer.isSignupSuccess
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

let Signup = connect(mapStateToProps, mapDispatchToProps)(SignupView);

export default Signup;
