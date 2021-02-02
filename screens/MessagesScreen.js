import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

import ListItem from "../components/ListItem";
import { messagesData } from "../Data";
import { MaterialIcons } from "@expo/vector-icons";
import routes from "../navigation/routes";
import Colors from "../Colors";

class MessagesScreen extends Component {
  render() {
    return (
      <View style={styles.messageScreen}>
        <FlatList
          data={messagesData}
          renderItem={({ item }) => {
            return (
              <ListItem
                onPress={() =>
                  this.props.navigation.navigate(routes.CHAT, item)
                }
                title={item.name}
                subTitle={
                  item.lastMessage.length > 40
                    ? item.lastMessage.slice(0, 40) + "..."
                    : item.lastMessage.slice(0, 40)
                }
                prefix={
                  <Image source={{ uri: item.imgUrl }} style={styles.image} />
                }
                style={styles.listItem}
                renderRightActions={() => (
                  <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => {
                      console.log(item.id);
                    }}
                  >
                    <MaterialIcons name="delete" size={32} color="#fff" />
                  </TouchableOpacity>
                )}
              />
            );
          }}
          keyExtractor={(data) => data.id.toString()}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        ></FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  messageScreen: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  image: { width: 60, height: 60, borderRadius: 30 },
  listItem: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: Colors.darkGray,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: Colors.background,
  },
  deleteButton: {
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    backgroundColor: "#ef4f4f",
  },
});

export default MessagesScreen;
