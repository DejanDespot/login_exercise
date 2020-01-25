import { hot } from "react-hot-loader/root";
import React, { Component } from "react";
import MainView from "./Views/MainView";
import { debounce } from "lodash";
import { connect } from "react-redux";
import * as actions from "./Store/actions/screen";
import styles from "./Styles/main.scss";

class App extends Component {
  componentDidMount() {
    window.addEventListener(
      "resize",
      debounce(() => {
        this.props.updateWindowSize(window.innerWidth);
      }, 200)
    );
  }

  render() {
    return (
      <div className={styles.appContainer}>
        <MainView />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isMobile: state.screen.width < 768
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateWindowSize: size => {
      dispatch(actions.updateWindowSize(size));
    }
  };
};

export default hot(connect(mapStateToProps, mapDispatchToProps)(App));
