import React, { useEffect, useLayoutEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";
import ChatScreen from "../screens/ChatScreen";
import routes from "./routes";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Stack = createStackNavigator();

const AccountNavigator = (props) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(props.route);
    if (routeName === routes.CHAT) {
      props.navigation.setOptions({ tabBarVisible: false });
    } else {
      props.navigation.setOptions({ tabBarVisible: true });
    }
  }, [props.navigation, props.route]);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.ACCOUNT}
        component={AccountScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name={routes.MESSAGES} 
        component={MessagesScreen}
        options={{
          headerStyle: {
            backgroundColor: '#15202b',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen 
        name={routes.CHAT} 
        component={ChatScreen}
        options={{
          headerStyle: {
            backgroundColor: '#15202b',
          },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
};
export default AccountNavigator;
