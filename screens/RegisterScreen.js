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

class RegisterScreen extends Component {
  submitForm = (values, actions) => {
    console.log(values);
  };
  render() {
    return (
      <Screen>
        <View style={styles.registerScreen}>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
            }}
            onSubmit={() => {
              this.submitForm;
            }}
            validationSchema={Schemas.registerSchema}
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
                      value={values.name}
                      errors={touched.name && errors.name}
                      prefix={
                        <MaterialIcons
                          name="person"
                          size={18}
                          style={styles.icon}
                        />
                      }
                      placeholder="Name"
                      name="name"
                      style={{ marginBottom: 24 }}
                    />
                    <Input
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      value={values.email}
                      errors={touched.email && errors.email}
                      prefix={
                        <MaterialIcons
                          name="email"
                          size={18}
                          style={styles.icon}
                        />
                      }
                      placeholder="E-mail"
                      name="email"
                      style={{ marginBottom: 24 }}
                    />
                    <Input
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      value={values.password}
                      errors={touched.password && errors.password}
                      prefix={
                        <MaterialIcons
                          name="lock"
                          size={18}
                          style={styles.icon}
                        />
                      }
                      placeholder="Password"
                      secureTextEntry
                      name="password"
                      style={{ marginBottom: 24 }}
                    />
                  </View>
                  <Button
                    title="Register"
                    onPress={handleSubmit}
                    style={{ marginBottom: 24 }}
                  />
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate(routes.LOGIN)}
                  >
                    <Text style={styles.icon}>Login</Text>
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
  registerScreen: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center", 
    paddingHorizontal: 14,
  },
  icon: {
    color: Colors.extra2LightGray,
  },
});

export default RegisterScreen;
