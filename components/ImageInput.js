import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Alert,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import PropTypes from "prop-types";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../Colors";

class ImageInput extends Component {
  scrollView;

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getCameraPermission();
  }

  getCameraPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert("You need to enable permission to access the library.");
    }
  };

  addImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        this.props.setFieldTouched(this.props.name, true);
        this.props.setFieldValue(this.props.name, [
          ...this.props.value,
          result.uri,
        ]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  removeImage = async (removeImageUri) => {
    Alert.alert("Are you sure want to remove?", "", [
      {
        text: "Yes",
        onPress: () =>
          this.props.setFieldValue(
            this.props.name,
            this.props.value.filter((imageUri) => imageUri !== removeImageUri)
          ),
      },
      {
        text: "No",
        style: "cancel",
      },
    ]);
  };

  render() {
    return (
      <View style={styles.imageContainer}>
        <ScrollView
          horizontal
          ref={(ref) => (this.scrollView = ref)}
          onContentSizeChange={() => this.scrollView.scrollToEnd()}
        >
          <View style={styles.imageInput}>
            {this.props.value?.map((imageUri) => (
              <TouchableWithoutFeedback
                key={imageUri}
                onPress={() => this.removeImage(imageUri)}
              >
                <Image source={{ uri: imageUri }} style={styles.image} />
              </TouchableWithoutFeedback>
            ))}
            {this.props.value.length < 5 && (
              <TouchableWithoutFeedback onPress={this.addImage}>
                <View style={styles.addImage}>
                  <MaterialCommunityIcons
                    style={styles.icon}
                    name="camera"
                    size={40}
                  />
                </View>
              </TouchableWithoutFeedback>
            )}
          </View>
        </ScrollView>
        {this.props.error && (
          <Text style={styles.error}>{this.props.error}</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    borderRadius: 10,
    overflow: "hidden",
    marginRight: 6,
  },
  addImage: {
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: 100,
    backgroundColor: Colors.darkGray,
    borderRadius: 10,
  },
  imageInput: {
    flexDirection: "row",
    marginRight: 10,
  },
  error: {
    color: "#ff0000",
    fontSize: 12,
    paddingLeft: 8,
    paddingVertical: 4,
  },
  imageContainer: {
    paddingVertical: 30,
  },
  icon: { color: Colors.extraLightGray },
});

ImageInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.array,
  setFieldTouched: PropTypes.func,
  setFieldValue: PropTypes.func,
};

export default ImageInput;
