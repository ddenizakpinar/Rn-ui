import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../Colors";

class CreateNewButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <MaterialCommunityIcons name="plus-circle" color={"#fff"} size={30} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    height: 60,
    width: 60,
    bottom: 20,
  },
});

export default CreateNewButton;
