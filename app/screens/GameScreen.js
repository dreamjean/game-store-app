import React from "react";
import { StatusBar } from "expo-status-bar";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import styled from "styled-components";

import colors from "../config/colors";
import ListItem from "../components/ListItem";
import Text from "../components/Text";
import ImageBanners from "../components/ImageBanners";

const totalStars = 5;

export default GameScreen = ({ navigation, route }) => {
  const game = route.params;

  const renderStars = () => {
    let stars = [];

    for (let s = 1; s <= totalStars; s++) {
      stars.push(
        <FontAwesome
          key={s}
          name="star"
          size={15}
          color={Math.floor(game.rating) >= s ? colors.primary : colors.grey}
          style={{ marginRight: 5 }}
        />
      );
    }
    return (
      <Stars>
        {stars}
        <Text name grey style={{ marginLeft: 5 }}>
          {game.rating}
        </Text>
      </Stars>
    );
  };

  return (
    <ScrollViewContainer>
      <StatusBar style="light" />
      <ImageContainer>
        <GameImage source={game.cover} />
        <CloseButton
          activeOpacity={0.6}
          underlayColor={colors.primary}
          onPress={() => navigation.goBack()}
        >
          <MaterialCommunityIcons
            name="close-octagon-outline"
            size={36}
            color={colors.white}
          />
        </CloseButton>
      </ImageContainer>
      <ListItem
        image={game.cover}
        title={game.title}
        subTitle={game.category[0]}
        Iconcomponent={
          <IconContainer>
            <MaterialCommunityIcons
              name="cloud-download"
              size={24}
              color={colors.white}
            />
          </IconContainer>
        }
      />
      <Description>
        <StarsContainer>
          {renderStars()}
          <Text name grey>
            {game.age}
          </Text>
        </StarsContainer>

        <ImageBanners
          big
          items={game.screenshots}
          navigation={navigation}
          routeName='Photo'
        />

        <Text description grey>{game.description}</Text>
      </Description>
    </ScrollViewContainer>
  );
};

const ScrollViewContainer = styled.ScrollView`
  background-color: ${colors.secondary};
`;

const ImageContainer = styled.View`
  margin-bottom: 8px;
`;

const GameImage = styled.Image`
  height: 300px;
  width: 100%;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
`;

const CloseButton = styled.TouchableHighlight`
  position: absolute;
  top: 32px;
  left: 16px;
  border-radius: 16px;
`;

const IconContainer = styled.View`
  background-color: ${colors.primary};
  width: 40px;
  height: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

const StarsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 4px 0;
`;

const Stars = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 5px;
`;



const Description = styled.View`
  margin: 8px 16px;
`;
