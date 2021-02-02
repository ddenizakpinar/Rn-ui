import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import FeedScreen from "../screens/FeedScreen";
import DetailsScreen from "../screens/DetailsScreen";
import routes from "./routes";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name={routes.FEED} component={FeedScreen} />
    <Stack.Screen name={routes.DETAILS} component={DetailsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
