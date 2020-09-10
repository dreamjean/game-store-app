import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import styled from "styled-components";

import colors from "../config/colors";
import Text from "./Text";

export default LiveCard = ({ image, title, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Container>
        <Image source={image} />
        <TextContainer>
          <Title>
            <Text small>
              {title}
            </Text>
          </Title>
          <Live>
            <Text small>
              Live
            </Text>
          </Live>
        </TextContainer>
      </Container>
    </TouchableWithoutFeedback>
  );
};

const Container = styled.View`
  margin-bottom: 16px;
`;

const Image = styled.Image`
  width: 100%;
  height: 275px;
  border-radius: 12px;
`;

const TextContainer = styled.View`
  flex-direction: row;
  position: absolute;
  top: 8px;
  right: 16px;
`;

const Title = styled.View`
  background-color: ${colors.primary};
  border-radius: 4px;
  padding: 2px 8px;
`;

const Live = styled.View`
  background-color: ${colors.red};
  border-radius: 4px;
  padding: 2px 8px;
  margin-left: 8px;
`;
