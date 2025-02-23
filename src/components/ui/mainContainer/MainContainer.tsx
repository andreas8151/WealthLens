import React from "react";
import { SafeAreaView } from "react-native";
import { styles } from "./MainContainer.styles";
import { MainContainerProps } from "./MainContainer.types";

const MainContainer: React.FC<MainContainerProps> = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

export default MainContainer;
