import React from "react";
import styled from "styled-components";

import Text from "./Text";

export default ListItem = ({
  image,
  imageStyle,
  title,
  subTitle,
  Iconcomponent,
}) => {
  return (
    <ViewStyled>
      <Image source={image} style={imageStyle} />
      <TextContainer>
        <Text description bold>{title}</Text>
        {subTitle && (
          <Text grey>
            {subTitle}
          </Text>
        )}
      </TextContainer>
      {Iconcomponent}
    </ViewStyled>
  );
};

const ViewStyled = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
`;

const Image = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 12px;
`;

const TextContainer = styled.View`
  flex: 1;
  margin-left: 12px;
`;
