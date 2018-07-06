import { AsyncStorage } from "react-native";
import HttpHelper from "@helpers/http_helper.js";

// actions that will update state
export const LOAD_USER = "LOAD_USER";
export const LOG_OUT = "LOG_OUT";

const USER_STORAGE_KEY = "__USER_STORAGE_KEY__";
const TOKEN_STORAGE_KEY = "__TOKEN_STORAGE_KEY__";

export function login() {
  return dispatch => {
    return dispatch({
      type: LOAD_USER,
      user: {
        name: "OAT",
        email: "OAT@EMAIL",
        token: "1234"
      }
    });
  };
}

export function logout() {
  return dispatch => {
    return Promise.all([
      AsyncStorage.removeItem(USER_STORAGE_KEY),
      AsyncStorage.removeItem(TOKEN_STORAGE_KEY)
    ]).then(([rawUser, token]) => {
      dispatch({
        type: LOG_OUT
      });
      return;
    });
  };
}

export function loadFromStorage() {
  return dispatch => {
    return Promise.all([
      AsyncStorage.getItem(USER_STORAGE_KEY),
      AsyncStorage.getItem(TOKEN_STORAGE_KEY)
    ]).then(([rawUser, token]) => {
      if (!rawUser) {
        return Promise.resolve(null);
      }
      const user = JSON.parse(rawUser);
      dispatch({
        type: LOAD_USER,
        user,
        token
      });
      return Promise.resolve({
        user,
        token
      });
    });
  };
}
