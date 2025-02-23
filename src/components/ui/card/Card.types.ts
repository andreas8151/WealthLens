import { ViewStyle } from "react-native";

export interface CardProps {
  title?: string;
  content?: string;
  value: number; // ✅ New prop for ChangeIndicator value
  style?: ViewStyle;
}
