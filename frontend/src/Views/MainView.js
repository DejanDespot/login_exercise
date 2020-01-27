import React, { Component } from "react";
import styles from "../Styles/main_view.scss";
import Login from "../Components/Login";
import * as actions from "../Store/actions/auth";
import { connect } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import HomePage from "../Containers/HomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";

class MainView extends Component {
  render() {
    const { logIn, loading, error, isSnackOpened, closeSnack } = this.props;

    return (
      <div className={styles.mainView}>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Switch>
          <Route path="/login">
            <Login login={logIn} loading={loading} error={error} />
          </Route>
          <Route path="/homepage">
            <HomePage />
          </Route>
        </Switch>
        <Snackbar
          open={isSnackOpened}
          autoHideDuration={6000}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          onClose={closeSnack}
        >
          <MuiAlert
            elevation={6}
            variant="filled"
            severity={error ? "error" : "success"}
          >
            {error ? "Login failed." : "Succesfully logged in!"}
          </MuiAlert>
        </Snackbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.auth.error,
    loading: state.auth.loading,
    isSnackOpened: state.auth.isSnackOpened,
    loggedIn: state.auth.loggedIn
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logIn: loginData => {
      dispatch(actions.logIn(loginData, ownProps.history));
    },
    closeSnack: () => {
      dispatch(actions.closeSnack());
    }
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MainView)
);
