import React, { Component } from "react";
import { Text } from "react-native";
import { connect } from "react-redux";

import { createStackNavigator } from "react-navigation";
import { bindActionCreators } from "redux";
import Login from "@Login/index";
import Home from "@Home/index";
import NewListItem from "@NewListItem/index";

import * as UserActions from "@User/actions.js";

const Navigator = createStackNavigator(
  {
    Home,
    NewListItem
  },
  {
    initialRouteName: "Home"
  }
);

class Main extends Component {
  state = {
    loading: true
  };

  render() {
    const { loading } = this.state;
    const { authenticated } = this.props;

    if (loading) {
      return <Text>Loading</Text>;
    }

    if (!authenticated) {
      return <Login />;
    }

    return <Navigator />;
  }

  componentDidMount() {
    const { loadFromStorage } = this.props;
    loadFromStorage().then(response => {
      if (!response) {
        // hide loader, show login
        this.setState({ loading: false });
      } else {
        // found user, updating store's state
        // will trigger onComponentUpdate on updated
      }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.authenticated && this.props.authenticated) {
      // user was loaded recently (either from storage or API)
      this.setState({
        loading: false
      });
    }
  }
}

function mapStateToProps(state, props) {
  return {
    user: state.userReducer.user,
    authenticated: state.userReducer.authenticated
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
