import React, { Component } from "react";
import { hot } from "react-hot-loader/root";
import MainView from "./Views/MainView";
import { debounce } from "lodash";
import { connect } from "react-redux";
import * as actions from "./Store/actions/screen";
import MobileView from "./Views/MobileView";

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
      <div style={{ width: "100%", height: "100%" }}>
        {this.props.isMobile ? <MobileView /> : <MainView />}
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
