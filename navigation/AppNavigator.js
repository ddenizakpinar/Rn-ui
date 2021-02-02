import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import FeedScreen from "../screens/FeedScreen";
import CreateProductScreen from "../screens/CreateProductScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import CreateNewButton from "./CreateNewButton";
import routes from "./routes";
import Colors from "../Colors";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      showLabel: false,
      activeTintColor: Colors.blue,
      inactiveTintColor: Colors.extraLightGray,
      style: {
        backgroundColor: Colors.darkGray,
        borderTopColor: "transparent",
      },
    }}
  >
    <Tab.Screen
      name={routes.FEED}
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={32} />
        ),
      }}
    />
    <Tab.Screen
      name={routes.CREATE}
      component={CreateProductScreen}
      options={({ navigation }) => ({
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="plus-circle"
            color={color}
            size={32}
          />
        ),
      })}
    />
    <Tab.Screen
      name={routes.ACCOUNT}
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={32} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
