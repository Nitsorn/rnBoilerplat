import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Provider } from "react-redux";
import Main from "@Main/index";
import store from "@store/index";

export default class App extends React.Component {
  state = {
    loading: false
  };
  render() {
    const { loading } = this.state;
    if (loading) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
