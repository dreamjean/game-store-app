import React from 'react';
import styled from 'styled-components'

import TouchableImage from './TouchableImage';


const ImageBanners = ({ items,  navigation, route, routeName, ...otherProps }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {items.map((item, index) => (
        <TouchableImage
          key={index}
          image={item.cover ? item.cover : item}
          onPress={() => navigation.navigate(routeName, item)}
          {...otherProps}
        />
      ) )}
    </ScrollView>

  )
}

const ScrollView = styled.ScrollView`
  margin: 10px 0;
  padding: 10px 0;
`

export default ImageBanners
