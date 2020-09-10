import React from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

import colors from "../config/colors";
import games from "../config/gameData";
import Text from "../components/Text";
import ListItem from "../components/ListItem";

function ProfileScreen(props) {
  return (
    <Container>
      <StatusBar style="light" />

      <AvatarContainer>
        <Avatar source={require("../assets/avatar.jpeg")} />
        <Text name>
          Rokia
        </Text>
        <Badge>
          <Text caption>
            Pro Player
          </Text>
        </Badge>
      </AvatarContainer>

      <Stats>
        <Text name>
          250 <Text grey>Games</Text>
        </Text>
        <Text name style={{ marginLeft: 16 }}>
          3 <Text grey>Puchases</Text>
        </Text>
      </Stats>
      <Text big blue>
        Purchased Games
      </Text>

      <FlatList
        data={games}
        keyExtractor={(game) => game.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={item.cover}
            title={item.title}
            subTitle={`${Math.floor(Math.random() * 1000) + 1} Sales`}
            Iconcomponent={
              <Text small blue>
                ${Math.floor(Math.random() * 50) + 1}
              </Text>
            }
          />
        )}
      />

      <Account>
        <Settings>
          <Ionicons name="md-settings" size={26} color={colors.white} />
        </Settings>
        <Logout>
          <Text description bold>
            Logout
          </Text>
        </Logout>
      </Account>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${colors.secondary};
`;

const AvatarContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin: 64px 0 16px 0;
`;

const Avatar = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 45px;
  margin-bottom: 16px;
`;

const Badge = styled.View`
  background-color: ${colors.primary};
  padding: 4px 12px;
  border-radius: 8px;
  margin: 8px 0;
`;

const Stats = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: center;
  margin-bottom: 24px;
`;

const FlatList = styled.FlatList`
  margin-top: 12px;
`;

const Account = styled.View`
  flex-direction: row;
  padding: 0 16px 8px 16px;
`;

const Settings = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
`;

const Logout = styled.TouchableOpacity`
  flex: 1;
  height: 50px;
  border-radius: 8px;
  background-color: ${colors.grey3};
  margin-left: 8px;
  justify-content: center;
  align-items: center;
`;

export default ProfileScreen;
