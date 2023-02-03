import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./Login/Login";
import Register from "./Login/Register";
import Recover from "./Login/Recover";
import HomeScreen from "./HomeScreen";
import About from "./About";
import History from "./History";
import Setting from "./Setting";
import Tracking from "./Tracking/Tracking";

import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function MyTabs({ route }) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarColor: "#009387",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={25} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        //options={{headerShown: false,
        // }}

        options={{
          headerShown: false,
          tabBarLabel: "History",
          tabBarColor: "#009387",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="history" size={25} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Tracking"
        component={Tracking}
        options={{
          headerShown: false,
          tabBarLabel: "Tracking",
          tabBarColor: "#694fad",
          tabBarIcon: ({ color }) => (
            <Feather name="map-pin" size={25} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          headerShown: false,
          tabBarLabel: "About",
          tabBarColor: "#694fad",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" color="black" size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        //  options={, }}
        options={{
          headerShown: false,
          tabBarLabel: "Setting",
          tabBarColor: "#694fad",
          tabBarIcon: ({ color }) => (
            <AntDesign name="setting" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default RootComponent = function () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Recover" component={Recover} />
        <Stack.Screen
          name="HomeTabs"
          component={MyTabs}
          screenOptions={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};