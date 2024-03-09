import React, { ReactNode } from "react";
import { SafeAreaView, StyleProp, View, ViewStyle } from "react-native";
import { globalStyles } from "../styles/globalStyles";

interface Props {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Container = (props: Props) => {
  const { children, style } = props;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[globalStyles.container, {}, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default Container;
