import React, {useState, useContext} from 'react'
import axios from 'axios'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {View, Text, Image, Button, TextInput, StyleSheet} from 'react-native'
import {Center} from './Center.jsx'
import {ImageContext} from './ImageProvider.jsx'

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
  const [text, onChangeText] = useState('Search by keyword tag');
  const {images, findImages} = useContext(ImageContext);

  return (
    <Center>
      <Text>Search Bar Goes Here</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button title='Find Images' onPress={() => {
        findImages();
        navigation.navigate('Results')
      }}></Button>
    </Center>
  )
}

const Results = ({navigation}) => {
  const {images} = useContext(ImageContext);
  return (
    <Center>
      <Text>
        List of Result Images Goes Here
      </Text>
      <Image
        source={
          {uri:images[0].previewURL}
        }
        style={{
          width: images[0].previewWidth,
          height: images[0].previewHeight
        }}
        id={
          images[0].id
        }
      />
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