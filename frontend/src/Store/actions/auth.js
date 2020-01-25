import { axiosInstance } from "../../Utils/restApi";
import {
  LOGIN_FAILURE,
  LOGIN_REQUESTED,
  LOGIN_SUCCES
} from "../types/authTypes";

const logIn = loginData => dispatch => {
  loginRequested();
  axiosInstance
    .post("/login", {
      loginData
    })
    .then(response => loginSuccess(response.data))
    .catch(error => loginFailure(error));
};

const loginRequested = () => ({
  type: LOGIN_REQUESTED
});

const loginSuccess = userData => ({
  type: LOGIN_SUCCES,
  payload: userData
});

const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: { error }
});

export { logIn };
