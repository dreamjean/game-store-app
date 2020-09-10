import React from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components";

import SafeAreaView from "../components/SafeAreaView";
import TextInput from "../components/TextInput";
import Text from "../components/Text";
import LiveCard from "../components/LiveCard";
import games from "../config/gameData";
import colors from "../config/colors";
import ImageBanners from "../components/ImageBanners";

function LiveScreen({ navigation }) {
  return (
    <SafeAreaView>
      <StatusBar style="light" />
      <Header>
        <Text big>
          Streaming
        </Text>
        <TextInput
          clearButtonMode="while-editing"
          iconName="search"
          selectionColor={colors.grey2}
          placeholder="Search live streams or games..."
        />
      </Header>
      <PopularGame>
        <Text description bold>
          Popular Game
        </Text>
        <ImageBanners
          light
          items={games}
          navigation={navigation}
          routeName="Game"
        />
      </PopularGame>

      <LiveGameTitle>
        <Text caption>
          Live Now
        </Text>
        <Text small blue>
          View all
        </Text>
      </LiveGameTitle>

      <FlatList
        data={games}
        keyExtractor={(game) => game.id.toString()}
        renderItem={({ item }) => (
          <LiveCard
            image={item.cover}
            title={item.title}
            onPress={() => navigation.navigate("Game", item)}
          />
        )}
      />
    </SafeAreaView>
  );
}

const Header = styled.View`
  padding: 22px 16px 8px 16px;
`;

const PopularGame = styled.View`
  margin: 8px 16px 0 16px;
`;

const LiveGameTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 16px 12px 16px;
  align-items: center
`;

const FlatList = styled.FlatList`
  flex: 1;
  padding: 0 16px;
`;

export default LiveScreen;
