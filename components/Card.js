import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import Colors from "../Colors";

class Card extends Component {
  render() {
    const item = this.props.data.item;
    const { onPress } = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.cardComponent}>
          <Image style={styles.image} source={{ uri: item.imgUrl }} />
          <View style={styles.itemInfo}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  cardComponent: {
    flex: 1,
    alignItems: "center",
    borderRadius: 4,
    overflow: "hidden",
    backgroundColor: Colors.darkGray,
    marginBottom: 20,
    marginHorizontal: 16,
  },
  image: {
    width: "100%",
    height: 220,
  },
  itemInfo: {
    flex: 1,
    alignSelf: "flex-start",
    marginVertical: 18,
    marginHorizontal: 13,
  },
  title: {
    fontWeight: "600",
    color: Colors.extra2LightGray,
    fontSize: 18,
  },
  price: {
    marginTop: 3,
    color: Colors.blue,
    fontSize: 14,
  },
});

Card.propTypes = {
  data: PropTypes.object,
};

export default Card;
