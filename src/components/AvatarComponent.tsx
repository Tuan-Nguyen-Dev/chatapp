import { View, Text, Image, StyleProp, ViewProps } from "react-native";
import React from "react";
import TextComponent from "./TextComponent";
import { globalStyles } from "../styles/globalStyles";

interface Props {
  photoUrl?: string;
  size?: number;
  bordered?: boolean;
  border?: {
    width?: number;
    color?: string;
  };
  styles?: StyleProp<ViewProps>;
}

const AvatarComponent = (props: Props) => {
  const { photoUrl, border, bordered, size, styles } = props;

  const localStyles: any = [globalStyles.avatar, {}, styles];
  return (
    <View>
      {photoUrl ? (
        <Image style={localStyles} source={{ uri: photoUrl }} />
      ) : (
        <View style={localStyles}>
          <TextComponent text="asdasd" />
        </View>
      )}
    </View>
  );
};

export default AvatarComponent;
