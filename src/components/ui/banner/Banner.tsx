import React from "react";
import { View, Text } from "react-native";
import { styles } from "./Banner.styles";
import { BannerProps } from "./Banner.types";

const Banner: React.FC<BannerProps> = ({ title, backgroundColor, style }) => {
  return (
    <View style={[styles.banner, { backgroundColor }, style]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Banner;
