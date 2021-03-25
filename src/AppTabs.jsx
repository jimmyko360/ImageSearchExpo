import React, {useState, useContext} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Search} from './tabs/Search.jsx'
import {Results} from './tabs/Results.jsx'
import {Details} from './tabs/Details.jsx'

const Tabs = createBottomTabNavigator();

export const AppTabs = ({}) => {
  return (
    <NavigationContainer>
      <Tabs.Navigator initialRouteName='Search'>
        <Tabs.Screen name='Search' title='Search' component={Search}/>
        <Tabs.Screen name='Results' title='Results' component={Results}/>
        <Tabs.Screen name='Details' title='Details' component={Details}/>
      </Tabs.Navigator>
    </NavigationContainer>
  );
}