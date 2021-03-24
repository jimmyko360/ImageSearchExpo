import React from 'react'
import axios from 'axios'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {View, Text, Button, TextInput, StyleSheet} from 'react-native'
import {Center} from './Center.jsx'

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    margin: 15,
    borderWidth: 1,
  },
});

const Search = ({navigation}) => {
  const [text, onChangeText] = React.useState('Search by keyword tag');

  return (
    <Center>
      <Text>Search Bar Goes Here</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button title='Find Images' onPress={() => {
        navigation.navigate('Results')
      }}></Button>
    </Center>
  )
}

const Results = ({navigation}) => {
  return (
    <Center>
      <Text>
        List of Result Images Goes Here
      </Text>
    </Center>
  )
}

export const Routes = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Search'>
        <Stack.Screen name='Search' component={Search}/>
        <Stack.Screen name='Results' component={Results}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}