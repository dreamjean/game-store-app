import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import GameScreen from '../screens/GameScreen';
import FeedNavigator from './FeedNavigator'

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator mode='modal' headerMode='none'>
    <Stack.Screen name='Feed' component={FeedNavigator} />
    <Stack.Screen name='Game' component={GameScreen} />
  </Stack.Navigator>
)

export default AppNavigator
