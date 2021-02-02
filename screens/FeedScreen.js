import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";

import { feedData } from "../Data";
import Screen from "../components/Screen";
import Card from "../components/Card";
import CategorySelector from "../components/CategorySelector";
import routes from "../navigation/routes";

class FeedScreen extends Component {
  render() {
    return (
      <Screen>
        <View style={styles.feedScreen}>
          <CategorySelector />
          <FlatList
            data={feedData}
            showsVerticalScrollIndicator={false}
            renderItem={(data) => (
              <Card
                data={data}
                onPress={() =>
                  this.props.navigation.navigate(routes.DETAILS, data.item)
                }
              ></Card>
            )}
            keyExtractor={(data) => data.id.toString()}
            onRefresh={() => console.log("refresh")}
            refreshing={false}
          />
        </View>
        <StatusBar />
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  feedScreen: {
    flex: 1,
  },
});

export default FeedScreen;
