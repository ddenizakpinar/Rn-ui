import React, { Component } from "react";
import { StyleSheet, Platform, SafeAreaView, StatusBar } from "react-native";

import Colors from "../Colors";

class Screen extends Component {
  render() {
    const { children, style } = this.props;
    return (
      <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    backgroundColor: Colors.background,
  },
});

export default Screen;
