import React from "react";
import {
  AvatarComponent,
  ButtonComponent,
  Container,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from "../../components";
import { fontFamilles } from "../../constants/fontFamilles";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../constants/colors";
import { globalStyles } from "../../styles/globalStyles";
import { Platform, StatusBar } from "react-native";

const HomeScreen = () => {
  return (
    <Container>
      <SectionComponent
        styles={{
          marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        <RowComponent>
          <AvatarComponent photoUrl="https://th.bing.com/th/id/OIP.8eCI1hnENhIKArQHd2uApwHaJQ?w=155&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
          <SpaceComponent width={12} />
          <TextComponent
            text="Hello world!!!"
            type="title"
            size={24}
            flex={1}
            styles={{ textTransform: "capitalize" }}
            font={fontFamilles.medium}
          />
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <RowComponent>
          <RowComponent
            styles={[
              globalStyles.inputContainer,
              {
                flex: 1,
                justifyContent: "flex-start",
                paddingHorizontal: 0,
                paddingLeft: 12,
              },
            ]}
          >
            <TextComponent text="Search" styles={{ flex: 1 }} />
            <ButtonComponent
              color={colors.gray}
              icon={<Ionicons name="search" size={20} color={colors.white} />}
              onPress={() => {}}
            />
          </RowComponent>
          <SpaceComponent width={16} />
          <ButtonComponent
            onPress={() => {}}
            icon={<Ionicons name="add" size={20} color={colors.white} />}
          />
        </RowComponent>
      </SectionComponent>
    </Container>
  );
};

export default HomeScreen;
