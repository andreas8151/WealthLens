import React, { useState } from "react";
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import styles from "./dropdownSelector.style";
import { DropdownItem } from "./dropdownSelector.type";

const DropdownSelector: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string | null>(null);
  const [items, setItems] = useState<DropdownItem[]>([
    { label: "Avanza", value: "Avanza" },
    { label: "Swedbank", value: "Swedbank" },
    { label: "Kameo", value: "Kameo" },
  ]);

  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Select an option"
        containerStyle={{ height: 50 }}
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
      />
    </View>
  );
};

export default DropdownSelector;
