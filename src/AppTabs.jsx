import React, {useState, useContext} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Search} from './tabs/Search.jsx'
import {Results} from './tabs/Results.jsx'
import {Details} from './tabs/Details.jsx'
import {Ionicons} from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

export const AppTabs = ({}) => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName='Search'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Search') {
              iconName = focused
                ? 'search-circle'
                : 'search-circle-outline';
            } else if (route.name === 'Results') {
              iconName = focused ? 'md-albums' : 'md-albums-outline';
            } else if (route.name === 'Details') {
              iconName = focused ? 'list-circle' : 'list-circle-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tabs.Screen name='Search' component={Search}/>
        <Tabs.Screen name='Results' component={Results}/>
        <Tabs.Screen name='Details' component={Details}/>
      </Tabs.Navigator>
    </NavigationContainer>
  );
}