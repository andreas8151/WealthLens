import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const DropdownSelector: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Choose an option:</Text>
      <RNPickerSelect
        onValueChange={(value) => setSelectedValue(value)}
        items={[
          { label: "Option 1", value: "option1" },
          { label: "Option 2", value: "option2" },
          { label: "Option 3", value: "option3" },
        ]}
        style={{
          inputIOS: styles.input,
          inputAndroid: styles.input,
        }}
        placeholder={{ label: "Select an option...", value: null }}
      />
      <Text style={styles.selected}>Selected: {selectedValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { fontSize: 16, marginBottom: 5 },
  input: { fontSize: 16, padding: 10, borderWidth: 1, borderRadius: 5 },
  selected: { marginTop: 10, fontSize: 16 },
});

export default DropdownSelector;
