import React from 'react'
import {Text} from 'react-native'
import {Center} from './Center.jsx'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Tabs = createBottomTabNavigator();

const Home = () => {
  return(
    <Center>
      <Text>
        Home
      </Text>
    </Center>
  )
}

const Search = () => {
  return(
    <Center>
      <Text>
        Search
      </Text>
    </Center>
  )
}

export const AppTabs = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name='Home' component={Home}/>
      <Tabs.Screen name='Search' component={Search}/>
    </Tabs.Navigator>
  )
}