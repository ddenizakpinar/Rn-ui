import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./navigation/AuthNavigator";
import AppNavigator from "./navigation/AppNavigator";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
    };
  }

  render() {
    return (
      <NavigationContainer>
        {this.state.loggedIn ? <AuthNavigator /> : <AppNavigator />}
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
