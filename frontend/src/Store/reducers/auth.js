import {
  LOGIN_REQUESTED,
  LOGIN_SUCCES,
  LOGIN_FAILURE,
  CLOSE_SNACK
} from "../types/authTypes";

const initialState = {
  loggedIn: false,
  loading: false,
  error: null,
  isSnackOpened: false,
  userData: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUESTED:
      return { ...state, loading: true, error: undefined };
    case LOGIN_SUCCES:
      return {
        ...state,
        loading: false,
        userData: action.payload,
        error: null,
        isSnackOpened: true
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isSnackOpened: true
      };
    case CLOSE_SNACK:
      return {
        ...state,
        isSnackOpened: false
      };
    default:
      return state;
  }
};

export default reducer;
