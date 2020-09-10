import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components'

import colors from '../config/colors';
import categories from '../config/categories';
import Text from './Text';

const NavBarItemList = ({ selectedCategory, onSelectCategory}) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {categories.map((category, index) => (
        <TouchableWithoutFeedback key={index} onPress={() => onSelectCategory(category)}>
          <Category key={index}>
            <CategoryName
              selected={selectedCategory === category ? true : false}>
                {category}
            </CategoryName>
            {selectedCategory === category && <CategoryLine />}
          </Category>
        </TouchableWithoutFeedback>
      ) )}
    </ScrollView>
  )
}

const ScrollView = styled.ScrollView`
  background-color: ${colors.dark};
  flex-grow: 0;
  padding: 6px 0;
  margin-top: 6px;
`
const Category = styled.View`
  align-items: center;
  margin: 0 16px;
  height: 32px;
`;

const CategoryName = styled(Text)`
  color: ${({selected}) => (selected ? colors.primary : colors.grey)};
  font-weight: ${({ selected }) => (selected ? '700' : '500')};
  font-size: 16px;
`;

const CategoryLine = styled.View`
  width: 100%;
  height: 2px;
  border-radius: 1px;
  background-color: ${colors.primary};
  margin-top: 2px
`;

export default NavBarItemList
