import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import PropTypes from "prop-types";

import { categoriesData } from "../Data";
import Colors from "../Colors";

class CategorySelector extends Component {
  state = {
    selectedCategoryId: 1,
  };

  render() {
    return (
      <View style={styles.categorySelectorContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categoriesData}
          renderItem={(data) => (
            <TouchableOpacity
              onPress={() => {
                this.setState({ selectedCategoryId: data.item.id });
              }}
              style={[
                styles.itemCategory,
                this.state.selectedCategoryId === data.item.id &&
                  styles.selectedItem,
              ]}
            >
              <Text
                style={
                  this.state.selectedCategoryId === data.item.id
                    ? styles.selectedText
                    : { color: Colors.background }
                }
              >
                {data.item.name}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(data) => data.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  categorySelectorContainer: {
    marginVertical: 16,
  },
  itemCategory: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 30,
    backgroundColor: "white",
    color: "black",
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedItem: {
    backgroundColor: Colors.blue,
    color: "white",
  },
  selectedText: {
    color: Colors.extra2LightGray,
  },
});

CategorySelector.propTypes = {};

export default CategorySelector;
