import { combineReducers } from 'redux';
import ACTION from '../utils/action-utils';

const INITIAL_STATE = {
};

const signupReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ACTION.OPEN_SIGNUP_SUCCESS_BOX:
    return {
      ...state,
      isSignupSuccess: action.payload.isSignupSuccess
    };

  default:
    return state;
  }
}

const reducer = combineReducers({
  signupReducer
});

export default reducer;
