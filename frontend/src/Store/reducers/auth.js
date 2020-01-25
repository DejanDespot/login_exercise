import {
  LOGIN_REQUESTED,
  LOGIN_SUCCES,
  LOGIN_FAILURE
} from "../types/authTypes";

const initialState = {
  loggedIn: false,
  loading: false,
  error: null,
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
        error: undefined
      };
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};

export default reducer;
