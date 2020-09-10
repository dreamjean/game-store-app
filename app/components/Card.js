import React from "react";
import { TouchableHighlight } from "react-native";
import styled from "styled-components";

import Text from "./Text";
import colors from "../config/colors";

export default Card = ({ color, title, subTitle, image, onPress }) => {
  return (
    <TouchableHighlight
      activeOpacity={0.7}
      underlayColor={colors.secondary}
      onPress={onPress}
    >
      <ViewStyled>
        <CardImage source={image} />
        <CardInfo backgroundColor={color}>
          <Image source={image} />
          <TextContainer>
            <Text caption>
              {title}
            </Text>
            <SubTitle>{subTitle}</SubTitle>
          </TextContainer>
        </CardInfo>
      </ViewStyled>
    </TouchableHighlight>
  );
};

const ViewStyled = styled.View`
  margin-top: 18px;
`;
const CardImage = styled.Image`
  width: 100%;
  height: 300px;
`;

const CardInfo = styled.View`
  flex-direction: row;
  align-items: center;
  margin: -50px 16px 0 16px;
  padding: 12px 16px;
  border-radius: 12px;
  overflow: hidden;
`;

const SubTitle = styled(Text)`
  color: ${colors.white2};
  font-weight: 300;
`

const Image = styled.Image`
  width: 55px;
  height: 45px;
  border-radius: 8px;
`;

const TextContainer = styled.View`
  flex: 1;
  padding-left: 16px;
`;
