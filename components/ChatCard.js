import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import PropTypes from "prop-types";

class ChatCard extends Component {
  // name -> user
  render() {
    const { item } = this.props.data;
    return (
      <View
        style={[
          styles.chatCardContainer,
          { flexDirection: item.name === "Deniz" ? "row-reverse" : "row" },
        ]}
      >
        <View style={styles.profileImageContainer}>
          <Image source={{ uri: item.imgUrl }} style={styles.profileImage} />
        </View>
        <View
          style={[
            styles.messageContainer,
            item.name == "Deniz" ? styles.receiver : styles.sender,
          ]}
        >
          <View>
            <Text style={{ color: "white" }}>{item.lastMessage}</Text>
            <Text style={styles.timestamp}>12:52</Text>
          </View>
          <View
            style={[
              styles.tick,
              item.name == "Deniz" ? styles.receiverTick : styles.senderTick,
            ]}
          ></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  chatCardContainer: {
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: 4,
  },
  profileImageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: "hidden",
  },
  profileImage: {
    width: "100%",
    height: "100%",
  },
  messageContainer: {
    width: "60%",
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 12,
    justifyContent: "center",
    position: "relative",
  },
  receiver: {
    backgroundColor: "#222831",
  },
  sender: {
    backgroundColor: "#30475e",
  },
  tick: {
    width: 10,
    height: 10,
    position: "absolute",
    backgroundColor: "#222831",
    transform: [{ rotateZ: "45deg" }],
  },
  receiverTick: {
    backgroundColor: "#222831",
    right: -5,
  },
  senderTick: {
    backgroundColor: "#30475e",
    left: -5,
  },
  timestamp: {
    alignSelf: "flex-end",
    color: "#c9c9c9",
    fontSize: 8,
  },
});

ChatCard.propTypes = {
  data: PropTypes.object,
};

export default ChatCard;
