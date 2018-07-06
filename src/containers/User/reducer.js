import { LOAD_USER, LOG_OUT } from "@User/actions.js";

let userState = {
  user: null,
  token: null,
  authenticated: false
};

export const userReducer = (state = userState, action) => {
  switch (action.type) {
    case LOAD_USER:
      return {
        ...state,
        user: action.user,
        token: action.token,
        authenticated: true
      };
    case LOG_OUT:
      debugger;
      return {
        ...state,
        ...userState
      };
    default:
      return state;
  }
};
