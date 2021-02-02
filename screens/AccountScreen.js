import React, { Component } from "react";
import { Text, View, StyleSheet, Image, FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import { accountData, accountOptions } from "../Data";
import Icon from "../components/Icon";
import routes from "../navigation/routes";
import Colors from "../Colors";

class AccountScreen extends Component {
  render() {
    return (
      <Screen>
        <View>
          <ListItem
            title={accountData.name}
            subTitle={accountData.email}
            prefix={
              <Image
                source={{ uri: accountData.imgUrl }}
                style={styles.accountImage}
              />
            }
            style={styles.accountListItem}
          />
          <FlatList
            data={accountOptions}
            renderItem={(data) => (
              <ListItem
                onPress={() =>
                  this.props.navigation.navigate(routes[data.item.route])
                }
                title={data.item.title}
                prefix={
                  <Icon
                    backgroundColor={data.item.icon.backgroundColor}
                    name={data.item.icon.name}
                  />
                }
                style={styles.listItem}
              />
            )}
            keyExtractor={(data) => data.title}
            style={styles.options}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
          <ListItem
            title="Log Out"
            prefix={<Icon backgroundColor="#1DA1F2" name={"logout"} />}
            style={styles.listItem}
            key="logout"
          />
        </View>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  accountImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  listItem: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: Colors.darkGray,
  },
  accountListItem: {
    paddingHorizontal: 14,
    paddingVertical: 20,
    backgroundColor: Colors.darkGray,
  },
  options: {
    marginVertical: 60,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: Colors.darkGray,
  },
});

export default AccountScreen;
