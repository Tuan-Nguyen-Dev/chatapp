import React from "react";
import { StyleProp, Text, TextStyle } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { fontFamilles } from "../constants/fontFamilles";
import { colors } from "../constants/colors";

interface Props {
  text: string;
  font?: string;
  color?: string;
  size?: string;
  type?: "title" | "description";
  style?: StyleProp<TextStyle>;
}

const TextComponent = (props: Props) => {
  const { text, font, color, size, type, style } = props;
  return (
    <Text
      style={[
        globalStyles.text,
        {
          fontFamily:
            type === "title" ? fontFamilles.bold : fontFamilles.regular,
          fontSize: type === "title" ? 16 : 14,
          color: color ?? colors.white,
        },
        style,
      ]}
    >
      {text}
    </Text>
  );
};

export default TextComponent;
