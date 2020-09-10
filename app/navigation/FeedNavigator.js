import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons, Entypo, FontAwesome5 } from '@expo/vector-icons'

import HomeScreen from '../screens/HomeScreen';
import LiveScreen from '../screens/LiveScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TabBarButton from './TabBarButton';
import colors from '../config/colors';

const Tab = createBottomTabNavigator();

const FeedNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          let IconComponent = MaterialCommunityIcons;

          if (route.name === 'Home') iconName = focused ? 'home-floor-g' : 'home-outline'
          if (route.name === 'Live') {
            iconName = focused ? 'rocket' : 'game-controller'
            IconComponent = focused ?  FontAwesome5 : Entypo
          }
          if (route.name === 'Profile') iconName = focused ? 'account' : 'account-outline'

          return <TabBarButton focused={focused} name={iconName} IconComponent={IconComponent} />
        }
      })}
      tabBarOptions={{
        showLabel: false,
        safeAreaInsets: {
          bottom: 4,
        },
        style: {
          backgroundColor: colors.dark,
          borderTopColor: colors.dark
        }
      }}
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Live' component={LiveScreen} />
      <Tab.Screen name='Profile' component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default FeedNavigator;


