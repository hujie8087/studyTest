import { SET_USER_LOGIN } from "./actionTypes";
import isEmpty from "lodash/isEmpty";

function auth(state = {}, action) {
  switch (action.type) {
    case SET_USER_LOGIN:
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user,
      };

    default:
      return state;
  }
}

export default auth;
