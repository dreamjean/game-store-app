import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import styled from "styled-components";

import colors from "../config/colors";

function TextInput({ iconName, value, onChange, placeholder, ...otherProps }) {
  return (
    <Container>
      {iconName && (
        <FontAwesome name={iconName} size={20} color={colors.grey2} />
      )}
      <TextInputStyled
        numberOfLines={1}
        value={value}
        onChangeText={(text) => onChange(text)}
        placeholder={placeholder}
        placeholderTextColor={colors.grey}
        {...otherProps}
      />
    </Container>
  );
}

const Container = styled.View`
  height: 46px;
  flex-direction: row;
  align-items: center;
  margin: 16px 4px;
  padding: 12px 16px;
  border-radius: 100px;
  background-color: ${colors.grey3};
`;

const TextInputStyled = styled.TextInput`
  flex: 1;
  color: ${colors.grey2};
  margin-left: 8px;
  height: 30px;
`;

export default TextInput;
