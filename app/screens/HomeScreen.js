import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components";

import Card from "../components/Card";
import Text from "../components/Text";
import SafeAreaView from "../components/SafeAreaView";
import NavBarItemList from "../components/NavBarItemList";
import games from "../config/gameData";

export default HomeScreen = ({ navigation }) => {
  const [selectedCategory, setSelectCategory] = useState("All");

  return (
    <SafeAreaView>
      <StatusBar style="light" />

      <Header>
        <Text caption>
          Hello{" "}
          <Text name>
            Rokia,
          </Text>
          {"\n"}
          <Text description>
            Best games for today
          </Text>
        </Text>

        <Avatar source={require("../assets/avatar.jpeg")} />
      </Header>

      <NavBarItemList
        selectedCategory={selectedCategory}
        onSelectCategory={(item) => {
          setSelectCategory(item);
        }}
      />

      <FlatList
        data={games.filter(
          (game) =>
            game.category.includes(selectedCategory) ||
            selectedCategory === "All"
        )}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            color={item.backgroundColor}
            image={item.cover}
            title={item.title}
            subTitle={item.teaser}
            onPress={() => navigation.navigate('Game', item)}
          />
        )}
      />
    </SafeAreaView>
  );
};

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 16px 24px 24px 24px;
`;

const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

const FlatList = styled.FlatList`
  flex: 1;
`;
