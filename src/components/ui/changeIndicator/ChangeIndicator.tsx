import React from "react";
import { View, Text } from "react-native";
import { styles } from "./changeIndicator.style";
import { ChangeIndicatorProps } from "./changeIndicator.type";

const ChangeIndicator: React.FC<ChangeIndicatorProps> = ({ value, style }) => {
  const isPositive = value >= 0;

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isPositive ? "#28A745" : "#DC3545" },
        style,
      ]}
    >
      <Text style={styles.text}>{isPositive ? `+${value}` : value}</Text>
    </View>
  );
};

export default ChangeIndicator;
