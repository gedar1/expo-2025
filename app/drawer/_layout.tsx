import { View, Text } from "react-native";
import React from "react";
import { Drawer } from "expo-router/drawer";
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomDrawer from "@/components/shared/CustomDrawer";

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        overlayColor: "rgba(0,0,0,0.6)",
        drawerActiveTintColor: "blue",
        sceneStyle: { backgroundColor: "#fff" },
        headerShadowVisible: false,
      }}
    >
      <Drawer.Screen
        name="user/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "User",
          title: "Usuario",
          drawerIcon: ({ color }) => <Ionicons size={28} name="person-circle-outline" color={color} />,
        }}
      />
      <Drawer.Screen
        name="schedule/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Horarios",
          title: "Horario",
          drawerIcon: ({ color }) => <Ionicons size={28} name="calendar-outline" color={color} />,
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
