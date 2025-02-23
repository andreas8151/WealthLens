import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    left: 50,
    right: 50,
    backgroundColor: "transparent",
  },
  circleButton: {
    width: 70,
    height: 70,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  label: {
    fontSize: 12,
    color: "white",
    fontWeight: "600",
  },
});
