import React from "react";
import { Text } from "react-native";
import MainContainer from "../components/ui/mainContainer/MainContainer";
import Banner from "../components/ui/banner/Banner";

const HomeScreen: React.FC = () => {
  return (
    <MainContainer>
      <Banner title="Welcome to WealthLens!" backgroundColor="#4f9c77" />
    </MainContainer>
  );
};

export default HomeScreen;
