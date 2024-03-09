import React, { ReactNode } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { globalStyles } from "../styles/globalStyles";

interface Props {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Container = (props: Props) => {
  const { children, style } = props;
  return <View style={[globalStyles.container, {}, style]}>{children}</View>;
};

export default Container;
