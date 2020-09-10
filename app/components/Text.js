import { Platform } from "react-native";
import styled, { css } from "styled-components";

import colors from "../config/colors";


const nameStyle = css`
  font-size: 20px;
  font-weight: bold;

`
const bigStyle = css`
  font-size: 24px;
  text-align: ${({blue}) => blue ? 'center' : 'left'};
  color: ${({blue}) => blue ? colors.primary : colors.white}
`


const smallStyle = css`
  font-weight: bold;
  color: ${({blue}) => blue ? colors.primary : colors.white};
`

const captionStyle = css`
  font-size: 16px;
  font-weight: 600;

`
const descriptionStyle = css`
  font-size: 18px;
  font-weight: ${({ bold }) => bold ? '600' : '400'};
  line-height: 24px;
`

const Text = styled.Text`
  font-family: ${Platform.OS === "ios" ? "Avenir Next" : "Roboto"};
  color: ${({ grey }) => grey ? colors.grey : colors.white};
  font-size: 14px;
  font-weight: ${({light}) => light ? '300' : '500'};

  ${({ big }) => big && bigStyle}
  ${({caption}) => caption && captionStyle}
  ${({description}) => description && descriptionStyle}
  ${({name}) => name && nameStyle}
  ${({small}) => small && smallStyle}
`;

export default Text;
