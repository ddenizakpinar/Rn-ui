import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import { MaterialIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import Schemas from "../Schemas";
import Input from "../components/Input";
import Colors from "../Colors";
import Button from "../components/Button";
import routes from "../navigation/routes";

class LoginScreen extends Component {
  submitForm = (values, actions) => {
    console.log(values);
    //console.log(actions);
  };
  render() {
    return (
      <Screen>
        <View style={styles.loginScreen}>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={this.submitForm}
            validationSchema={Schemas.loginSchema}
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
                <>
                  <View>
                    <Input
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      value={values.email}
                      touched={values.email}
                      error={touched.email && errors.email}
                      name="email"
                      prefix={
                        <MaterialIcons
                          name="email"
                          size={18}
                          style={styles.icon}
                        />
                      }
                      placeholder="Email"
                      keyboardType="email-address"
                      style={{ marginBottom: 24 }}
                    />
                    <Input
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      value={values.password}
                      touched={values.password}
                      error={touched.password && errors.password}
                      name="password"
                      prefix={
                        <MaterialIcons
                          name="lock"
                          size={18}
                          style={styles.icon}
                        />
                      }
                      secureTextEntry
                      placeholder="Password"
                      style={{ marginBottom: 24 }}
                    />
                  </View>
                  <Button
                    title="LOG IN"
                    onPress={() => handleSubmit()}
                    style={{ marginBottom: 24 }}
                  />
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate(routes.REGISTER)
                    }
                  >
                    <Text style={styles.icon}>Register</Text>
                  </TouchableOpacity>
                </>
              );
            }}
          </Formik>
        </View>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  loginScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 14,
  },
  icon: {
    color: Colors.extra2LightGray,
  },
});

export default LoginScreen;
