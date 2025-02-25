import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./submitButton.style";
import { SubmitButtonProps } from "./submitButton.type";

const SubmitButton: React.FC<SubmitButtonProps> = ({
  onPress,
  title = "Submit",
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;
