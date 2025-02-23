import React from "react";
import { View, Text } from "react-native";
import { styles } from "./Card.styles";
import { CardProps } from "./Card.types";
import ChangeIndicator from "../changeIndicator/ChangeIndicator";

const Card: React.FC<CardProps> = ({ title, content, value, style }) => {
  return (
    <View style={[styles.card, style]}>
      {title && <Text style={styles.title}>{title}</Text>}
      <ChangeIndicator value={value} />
      {content && <Text style={styles.content}>{content}</Text>}
    </View>
  );
};

export default Card;
