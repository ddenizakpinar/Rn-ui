import React, { Component } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { chatData } from "../Data";
import ChatCard from "../components/ChatCard";
import Input from "../components/Input";
import Colors from "../Colors";

class ChatScreen extends Component {
  componentDidMount() {
    this.props.navigation.setOptions({
      title: this.props.route.params.name,
    });
    this.props.navigation.dangerouslyGetParent().setOptions({
      tabBarVisible: false,
    });
  }

  render() {
    const item = this.props.route.params;
    return (
      <View style={styles.chatScreen}>
        <FlatList
          data={chatData}
          renderItem={(data) => <ChatCard data={data} />}
          keyExtractor={(data) => data.id.toString()}
        ></FlatList>
        <Formik initialValues={{ message: "" }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
          }) => {
            return (
              <Input
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.message}
                touched={values.message}
                error={touched.message && errors.message}
                name="message"
                placeholder="Type a message"
                postfix={
                  <TouchableOpacity>
                    <MaterialCommunityIcons
                      name="send"
                      size={24}
                      color={Colors.extraLightGray}
                    />
                  </TouchableOpacity>
                }
                style={styles.input}
              />
            );
          }}
        </Formik>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  chatScreen: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: Colors.background,
  },
  input: {
    marginHorizontal: 3,
    paddingBottom: 5,
  },
});

export default ChatScreen;
