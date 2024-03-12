import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from "react-native";
import React, { ReactNode } from "react";
import { globalStyles } from "../styles/globalStyles";
import TextComponent from "./TextComponent";
import { colors } from "../constants/colors";

interface Props {
  styles?: StyleProp<ViewStyle>;
  text?: string;
  icon?: ReactNode;
  onPress: () => void;
  color?: string;
}

const ButtonComponent = (props: Props) => {
  const { styles, text, onPress, icon, color } = props;
  return (
    <TouchableOpacity
      style={[
        globalStyles.button,
        { backgroundColor: color ?? colors.blue },
        styles,
      ]}
    >
      {icon && icon}
      {text && (
        <TextComponent
          text={text}
          color={colors ? colors.white : "#21212121"}
        />
      )}
    </TouchableOpacity>
  );
};

export default ButtonComponent;
