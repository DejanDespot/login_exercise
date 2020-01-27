import { axiosInstance } from "../../Utils/restApi";
import {
  LOGIN_FAILURE,
  LOGIN_REQUESTED,
  LOGIN_SUCCES,
  CLOSE_SNACK
} from "../types/authTypes";

// default Auth function
const logIn = (loginData, history) => dispatch => {
  // request login action to show a loader
  dispatch(loginRequested());
  axiosInstance
    .post("/login", loginData)
    .then(response => {
      let data = response.data.userData;
      if (data.email && data.password) {
        // set the user info in local storage
        localStorage.setItem("email", data.email);
        localStorage.setItem("password", data.password);
      }
      dispatch(loginSuccess(data, history));
    })
    .catch(error => dispatch(loginFailure(error)));
};

const loginRequested = () => ({
  type: LOGIN_REQUESTED
});

const loginSuccess = (userData, history) => {
  history.push("/homepage");
  return {
    type: LOGIN_SUCCES,
    payload: userData
  };
};

const loginFailure = error => {
  return {
    type: LOGIN_FAILURE,
    payload: error.response.data.message || "Login not successful!"
  };
};

// close information Snackbar
const closeSnack = () => {
  return {
    type: CLOSE_SNACK
  };
};

export { logIn, closeSnack };
