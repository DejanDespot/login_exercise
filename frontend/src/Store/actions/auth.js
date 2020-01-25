import { axiosInstance } from "../../Utils/restApi";
import {
  LOGIN_FAILURE,
  LOGIN_REQUESTED,
  LOGIN_SUCCES
} from "../types/authTypes";

const logIn = loginData => dispatch => {
  dispatch(loginRequested());
  axiosInstance
    .post("/login", loginData)
    .then(response => dispatch(loginSuccess(response.data)))
    .catch(error => dispatch(loginFailure(error)));
};

const loginRequested = () => ({
  type: LOGIN_REQUESTED
});

const loginSuccess = response => ({
  type: LOGIN_SUCCES,
  payload: response.userData
});

const loginFailure = error => {
  return {
    type: LOGIN_FAILURE,
    payload: error.response.data.message || "Login not successful!"
  };
};

export { logIn };
