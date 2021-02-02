import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import PropTypes from "prop-types";

import Colors from "../Colors";

class Input extends Component {
  render() {
    const {
      error,
      handleChange,
      handleBlur,
      value,
      name,
      style,
      prefix,
      postfix,
    } = this.props;
    return (
      <View style={[styles.textInputContainer, style]}>
        <View style={styles.inputWrap}>
          {prefix && <View style={styles.prefix}>{prefix}</View>}
          <TextInput
            placeholderTextColor={Colors.extraLightGray}
            {...this.props}
            style={styles.textInputApp}
            onChangeText={handleChange(name)}
            onBlur={handleBlur(name)}
            value={value}
          />
          {postfix && <View style={styles.postfix}>{postfix}</View>}
        </View>
        {error && <Text style={styles.error}>{error}</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInputApp: {
    flex: 1,
    paddingHorizontal: 16,
    color: "white",
  },
  prefix: {
    alignItems: "center",
    paddingLeft: 16,
    color: "#202020",
  },
  postfix: {
    alignItems: "center",
    paddingRight: 16,
    color: "#202020",
  },
  inputWrap: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: Colors.darkGray,
    minHeight: 50,
    borderRadius: 30,
    overflow:'hidden'
  },
  textInputContainer: {
    width: "100%",
  },
  error: {
    color: "#ff0000",
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});

Input.propTypes = {
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  prefix: PropTypes.element,
};
Input.defaultProps = {};

export default Input;
