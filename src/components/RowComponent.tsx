import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from "react-native";
import React, { ReactNode } from "react";
import { globalStyles } from "../styles/globalStyles";

interface Props {
  children: ReactNode;
  onPress?: () => void;
  styles?: StyleProp<ViewStyle>;
}

const RowComponent = (props: Props) => {
  const { children, onPress, styles } = props;
  return onPress ? (
    <TouchableOpacity
      style={[globalStyles.row, globalStyles.center, {}, styles]}
    >
      {children}
    </TouchableOpacity>
  ) : (
    <View style={[globalStyles.row, globalStyles.center, {}, styles]}>
      {children}
    </View>
  );
};

export default RowComponent;
