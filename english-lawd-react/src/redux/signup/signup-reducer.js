import ACTION from '../../utils/action-utils';

const INITIAL_STATE = {
};

export const signupReducer = (state = INITIAL_STATE, action) => {
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
