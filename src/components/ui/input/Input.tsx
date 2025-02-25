import React, { useState } from "react";
import { TextInput, View, Alert } from "react-native";
import styles from "./input.style";
import SubmitButton from "../submitButton/SubmitButton"; // ✅ Import the button component

const Input: React.FC = () => {
  const [number, setNumber] = useState<number | null>(null);

  const handleSubmit = () => {
    if (number === null) {
      Alert.alert("Invalid input", "Please enter a valid number.");
      return;
    }
    Alert.alert("Submitted!", `You entered: ${number}`);
    console.log("Submitted number:", number);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter number"
        keyboardType="numeric"
        value={number !== null ? number.toString() : ""}
        onChangeText={(value) => setNumber(parseFloat(value) || null)}
      />
      <SubmitButton onPress={handleSubmit} /> {/* ✅ Reusable Submit Button */}
    </View>
  );
};

export default Input;
