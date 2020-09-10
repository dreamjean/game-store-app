import React from 'react';
import styled from 'styled-components'

import colors from '../config/colors';

const TabBarButton = ({ focused, name, IconComponent }) => {
  return (
    <Container focused={focused}>
      <IconComponent name={name} size={24} color={colors.white} />
    </Container>
  )
}

const Container = styled.View`
  padding: 6px 16px;
  border-radius: 36px;
  background-color: ${({ focused }) => focused ? colors.primary : colors.dark};
  justify-content: center;
  align-items: center;
`


export default TabBarButton
