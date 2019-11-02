import { combineReducers } from 'redux';

import { signupReducer } from './signup/signup-reducer';

const reducer = combineReducers({
  signupReducer
});

export default reducer;
