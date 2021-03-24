import React, {useState, useContext} from 'react'
import axios from 'axios'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {View, Text, Image, Button, TextInput, StyleSheet} from 'react-native'
import {Center} from './Center.jsx'
import {ImageContext} from './ImageProvider.jsx'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Tabs = createBottomTabNavigator();

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
      {
        images.map((image)=>{
          return(
            <Image
            source={
              {uri:image.previewURL}
            }
            style={{
              width: image.previewWidth,
              height: image.previewHeight
            }}
            key={
              image.id
            }
          />
          )
        })
      }
    </Center>
  )
}

export const Routes = ({}) => {
  return (
    <NavigationContainer>
      <Tabs.Navigator initialRouteName='Search'>
        <Tabs.Screen name='Search' component={Search}/>
        <Tabs.Screen name='Results' component={Results}/>
      </Tabs.Navigator>
    </NavigationContainer>
  );
}