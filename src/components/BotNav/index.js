import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Icon } from "native-base";
import UserAccount from "../../pages/Account/UserAccount";
import HomeScreen from "../../pages/Home";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Booking from "../../pages/Hotel/Booking";
import normalize from "react-native-normalize";
import Communicate from "../../pages/Communicate";

const Tab = createMaterialBottomTabNavigator();

export function BotNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: "#299BD7" }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Beranda",
            tabBarIcon: ({ color }) => (
              <Icon
                type="FontAwesome5"
                name="home"
                color={color}
                style={{ fontSize: normalize(25) }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Booking"
          component={Booking}
          options={{
            tabBarLabel: "Booking",
            tabBarIcon: ({ color }) => (
              <Icon
                type="FontAwesome5"
                name="receipt"
                color={color}
                style={{ fontSize: normalize(25) }}
              />
            ),
          }}
        />
         <Tab.Screen
          name="Hubungi"
          component={Communicate}
          options={{
            tabBarLabel: "Hubungi",
            tabBarIcon: ({ color }) => (
              <Icon
                type="FontAwesome5"
                name="envelope-open-text"
                color={color}
                style={{ fontSize: normalize(25) }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Akun"
          component={UserAccount}
          options={{
            tabBarLabel: "Akun",
            tabBarIcon: ({ color }) => (
              <Icon
                type="FontAwesome5"
                name="user-circle"
                color={color}
                style={{ fontSize: normalize(25) }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
