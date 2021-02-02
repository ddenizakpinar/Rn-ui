import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-community/picker";

import Screen from "../components/Screen";
import { Formik } from "formik";
import Schemas from "../Schemas";
import Button from "../components/Button";
import ImageInput from "../components/ImageInput";
import Input from "../components/Input";
import Colors from "../Colors";
import { categoriesData } from "../Data";

class CreateProductScreen extends Component {
  constructor(props) {
    super(props);
  }

  submitForm = (values, actions) => {
    console.log(values);
  };
  render() {
    return (
      <Screen>
        <View>
          <Formik
            initialValues={{
              imgUrls: [],
              title: "",
              price: "",
              category: "",
              description: "",
            }}
            onSubmit={this.submitForm}
            validationSchema={Schemas.productSchema}
          >
            {({
              setFieldTouched,
              setFieldValue,
              errors,
              values,
              touched,
              handleSubmit,
              handleChange,
              handleBlur,
            }) => {
              return (
                <View style={{ paddingHorizontal: 20 }}>
                  <ImageInput
                    setFieldValue={setFieldValue}
                    setFieldTouched={setFieldTouched}
                    error={touched.imgUrls && errors.imgUrls}
                    value={values.imgUrls}
                    name="imgUrls"
                  />
                  <Input
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    value={values.title}
                    touched={values.title}
                    error={touched.title && errors.title}
                    name="title"
                    placeholder="Title"
                  />
                  <Input
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    value={values.price}
                    touched={values.price}
                    error={touched.price && errors.price}
                    name="price"
                    placeholder="Price"
                    style={{ marginTop: 24, width: "40%" }}
                    keyboardType="numeric"
                  />
                  <View style={styles.picker}>
                    <Picker
                      selectedValue={values.category}
                      onValueChange={(itemValue, itemIndex) =>
                        setFieldValue("category", itemValue)
                      }
                      mode="dialog"
                      style={{ color: Colors.extraLightGray }}
                    >
                      {categoriesData.map((category) => (
                        <Picker.Item
                          color={Colors.darkGray}
                          label={category.name}
                          value={category.id}
                          key={category.id}
                        />
                      ))}
                    </Picker>
                  </View>
                  <Input
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    value={values.description}
                    touched={values.description}
                    error={touched.description && errors.description}
                    name="description"
                    placeholder="Description"
                    style={{ marginTop: 24 }}
                    multiline
                  />
                  <Button
                    style={{ marginTop: 48 }}
                    title="Post"
                    onPress={handleSubmit}
                  />
                  <View style={{ alignItems: "center", marginTop: 24 }}>
                    <TouchableOpacity>
                      <Text style={{ color: "#E1E8ED" }}>Cancel</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          </Formik>
        </View>
      </Screen>
    );
  }
}
const styles = StyleSheet.create({
  picker: {
    paddingLeft: 4,
    marginTop: 24,
    width: "60%",
    backgroundColor: Colors.darkGray,
    borderRadius: 60,
    overflow: "hidden",
  },
  createProductContainer: {
    alignItems: "center",
  },
});

export default CreateProductScreen;
