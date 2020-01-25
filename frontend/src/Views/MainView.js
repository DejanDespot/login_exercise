import React, { Component } from "react";
import styles from "../Styles/main_view.scss";
import Login from "../Components/Login";
import * as actions from "../Store/actions/auth";
import { connect } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

class MainView extends Component {
  render() {
    const { logIn, loading, error, isSnackOpened, closeSnack } = this.props;

    return (
      <div className={styles.MainView}>
        <Login login={logIn} loading={loading} error={error} />
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
    isSnackOpened: state.auth.isSnackOpened
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logIn: loginData => {
      dispatch(actions.logIn(loginData));
    },
    closeSnack: () => {
      dispatch(actions.closeSnack());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
