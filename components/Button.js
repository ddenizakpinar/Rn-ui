import React, { Component } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import Colors from "../Colors";

class Button extends Component {
  render() {
    const { onPress, title, style, type = "blue" } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, style, { backgroundColor: Colors[type] }]}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    color: "white",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});

Button.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
