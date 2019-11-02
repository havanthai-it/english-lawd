const BASE_URL = 'http://localhost:8080/api/v1';

const API = {

  SIGN_UP: {
    URL: `${BASE_URL}/user`,
    METHOD: 'POST'
  },

  SIGN_IN: {
    URL: `${BASE_URL}/user`,
    METHOD: 'GET'
  }

};

export default API;
