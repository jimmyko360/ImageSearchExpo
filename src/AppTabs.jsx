import React, {useState, useContext} from 'react'
import axios from 'axios'
import {NavigationContainer} from '@react-navigation/native'
import {View, Text, Image, Button, TextInput, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
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
  const [text, onChangeText] = useState('');
  const {findImages} = useContext(ImageContext);

  return (
    <Center>
      <Text>
        Search by Keyword Tags,
        {'\n'}
        e.g. yellow flower
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button title='Find Images' onPress={() => {
        let textSearch = text.replace(/ /g, '+')
        findImages(textSearch);
        navigation.navigate('Results')
      }}/>
    </Center>
  )
}

const Results = ({navigation}) => {
  const {images, getDetails} = useContext(ImageContext);

  return (
    <Center>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
            onPress={()=>{
              console.log('Hello World')
              getDetails(item.id);
            }}>
              <Image
                source={{uri:item.previewURL}}
                style={{
                  width: item.previewWidth,
                  height: item.previewHeight,
                }}
                id={item.id}
              />
            </TouchableOpacity>
          )
        }}
      />
    </Center>
  )
}

const Details = ({navigation}) => {
  const {details} = useContext(ImageContext);

  return (
    <Center>
      <Image
        source={
          {uri:details.largeImageURL}
        }
        style={{
          width: details.webformatWidth,
          height: details.webformatHeight,
        }}
      />
      <Text>
        Author: {details.user}
        {'\n'}
        Tags: {details.tags}
      </Text>
    </Center>
  )
}

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