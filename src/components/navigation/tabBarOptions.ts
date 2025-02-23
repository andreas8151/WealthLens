import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

export const tabBarOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarStyle: {
    backgroundColor: "transparent",
    borderTopWidth: 0,
    height: 80,
    position: "absolute",
    elevation: 0, // Removes shadow on Android
  },
};
