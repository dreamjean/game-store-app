import { Platform } from 'react-native';
import Constants from 'expo-constants';
import styled from 'styled-components';
import colors from '../config/colors';

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === 'android' ? Constants.statusBarHeight : 0}px;
  background-color: ${colors.secondary}
`
export default SafeAreaView;
