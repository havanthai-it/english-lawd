import { connect } from 'react-redux';
import SignupFormView from './signup-form-view';
import { openSignupSuccessBoxAction } from './signup-form-actions';

const mapStateToProps = (state) => {
  return {
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    openSignupSuccessBox: (isSignupSuccess) => {
      dispatch(openSignupSuccessBoxAction(isSignupSuccess));
    }
  };
};

const SignupForm = connect(mapStateToProps, mapDispatchToProps)(SignupFormView)

export default SignupForm;
