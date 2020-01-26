import { axiosInstance } from "../../Utils/restApi";
import {
  LOGIN_FAILURE,
  LOGIN_REQUESTED,
  LOGIN_SUCCES,
  CLOSE_SNACK
} from "../types/authTypes";

const logIn = loginData => dispatch => {
  dispatch(loginRequested());
  axiosInstance
    .post("/login", loginData)
    .then(response => {
      let data = response.data.userData;
      if (data.email && data.password) {
        localStorage.setItem("email", data.email);
        localStorage.setItem("password", data.password);
      }
      dispatch(loginSuccess(data));
    })
    .catch(error => dispatch(loginFailure(error)));
};

const loginRequested = () => ({
  type: LOGIN_REQUESTED
});

const loginSuccess = userData => ({
  type: LOGIN_SUCCES,
  payload: userData
});

const loginFailure = error => {
  return {
    type: LOGIN_FAILURE,
    payload: error.response.data.message || "Login not successful!"
  };
};

const closeSnack = () => {
  return {
    type: CLOSE_SNACK
  };
};

export { logIn, closeSnack };
