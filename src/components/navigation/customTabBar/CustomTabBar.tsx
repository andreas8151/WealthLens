import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { styles } from "./CustomTabBar.styles";

const CustomTabBar = ({ state, navigation }: BottomTabBarProps) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const iconName = route.name === "Home" ? "home" : "briefcase";
        const isFocused = state.index === index;

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            style={[
              styles.circleButton,
              { backgroundColor: isFocused ? "#67a2da" : "#8E8E93" }, // ✅ Change color when focused
            ]}
          >
            <Ionicons name={iconName} size={28} color="white" />
            <Text style={styles.label}>{route.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
