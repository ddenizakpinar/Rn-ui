import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

class Icon extends Component {
  render() {
    const { style, name, size = 20, backgroundColor = "yellow" } = this.props;
    return (
      <View style={[styles.icon, style, { backgroundColor: backgroundColor }]}>
        <MaterialIcons style={{ color: "white" }} name={name} size={size} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    color: "red",
    padding: 8,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  backgroundColor: PropTypes.string,
};

export default Icon;
