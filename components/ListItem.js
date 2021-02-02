import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import PropTypes from "prop-types";

import Colors from "../Colors";

class ListItem extends Component {
  render() {
    const {
      title,
      subTitle,
      image,
      onPress,
      renderRightActions,
      prefix,
      style,
    } = this.props;
    return (
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={"#dddddd"} onPress={onPress}>
          <View style={[styles.listItem, style]}>
            {prefix && <View style={styles.prefix}>{prefix}</View>}
            <View>
              <Text style={styles.title}>{title}</Text>
              {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.darkGray,
  },
  subTitle: {
    color: "#374045",
    fontSize: 12,
  },
  title: {
    color: "white",
  },
  subTitle: {
    color: Colors.lightGray,
  },
  prefix: {
    marginRight: 10,
  },
});

ListItem.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  onPress: PropTypes.func,
};

export default ListItem;
