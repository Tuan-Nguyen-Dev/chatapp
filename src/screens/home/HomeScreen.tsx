import React from "react";
import {
  AvatarComponent,
  Container,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from "../../components";

const HomeScreen = () => {
  return (
    <Container>
      <SectionComponent>
        <RowComponent>
          <AvatarComponent photoUrl="https://th.bing.com/th/id/OIP.8eCI1hnENhIKArQHd2uApwHaJQ?w=155&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
          <SpaceComponent width={12} />
          <TextComponent
            text="Hello world!!!"
            type="title"
            size={24}
            flex={1}
          />
        </RowComponent>
      </SectionComponent>
    </Container>
  );
};

export default HomeScreen;
