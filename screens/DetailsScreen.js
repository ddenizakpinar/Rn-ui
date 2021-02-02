import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";

import Screen from "../components/Screen";
import Input from "../components/Input";
import Button from "../components/Button";
import Schemas from "../Schemas";
import ListItem from "../components/ListItem";
import Colors from "../Colors";

class DetailsScreen extends Component {
  sendMessage = (values, actions) => {
    console.log(values);
  };

  render() {
    const item = this.props.route.params;
    return (
      <Screen>
        <View style={styles.detailsScreen}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.imgUrl }} style={styles.productImage} />
          </View>
          <View style={styles.productInfo}>
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
          </View>
          <ListItem
            title={item.title}
            subTitle={"5 Listening(s)"}
            image={item.imgUrl}
            style={styles.listItem}
            prefix={
              <Image style={styles.titleImage} source={{ uri: item.imgUrl }} />
            }
          />
          <View style={styles.messageContainer}>
            <Formik
              initialValues={{ message: "Is this still available?" }}
              onSubmit={this.sendMessage}
              validationSchema={Schemas.productMessageSchema}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                touched,
                errors,
              }) => {
                return (
                  <View style={styles.message}>
                    <Input
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      value={values.message}
                      error={touched.message && errors.message}
                      placeholder="Your message..."
                      name="message"
                      style={{ marginBottom: 24 }}
                    />
                    <Button title="Contact Seller" onPress={handleSubmit} />
                  </View>
                );
              }}
            </Formik>
          </View>
        </View>
        <StatusBar style="dark" />
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  detailsScreen: {
    flex: 1,
  },
  imageContainer: {
    width: "100%",
    height: 270,
    overflow: "hidden",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  productImage: {
    flex: 1,
  },
  productInfo: {
    marginTop: 20,
    marginHorizontal: 14,
  },
  productTitle: {
    fontWeight: "600",
    color: Colors.extra2LightGray,
    fontSize: 18,
  },
  productPrice: {
    color: Colors.blue,
    fontWeight: "600",
    fontSize: 16,
  },
  messageContainer: {
    marginHorizontal: 14,
  },
  message: {
    alignItems: "center",
  },
  titleImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  listItem: {
    padding: 16,
    marginVertical: 24,
    backgroundColor: Colors.background,
  },
});

export default DetailsScreen;
