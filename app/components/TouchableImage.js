import React from 'react';
import { TouchableHighlight } from 'react-native';
import styled from 'styled-components'

import colors from '../config/colors'

const TouchableImage = ({ big = false, light = false, image, onPress}) => {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor={colors.grey3}
      onPress={onPress}>
      <ImageContainer light={light}>
        <Image big={big} source={image} />
      </ImageContainer>
    </TouchableHighlight>
  )
}

const ImageContainer = styled.View`
  box-shadow: ${({light}) => light ? 'none' : '2px 2px 5px rgba(0, 0, 0, 0.5)'};
  margin-right: 12px;
`

const Image = styled.Image`
  height: ${({big}) => big ? '200px' : '80px'};
  width: ${({big}) => big ? '300px' : '80px'};
  border-radius: 12px;
`
export default TouchableImage
