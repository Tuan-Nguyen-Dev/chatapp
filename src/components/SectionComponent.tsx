import { View, Text, StyleProp, ViewProps } from "react-native";
import React, { ReactNode } from "react";
import { globalStyles } from "../styles/globalStyles";

interface Props {
  children: ReactNode;
  styles?: StyleProp<ViewProps>;
}

const SectionComponent = (props: Props) => {
  const { children, styles } = props;
  return <View style={[globalStyles.section, {}, styles]}>{children}</View>;
};

export default SectionComponent;
