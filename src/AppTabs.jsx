import React, {useState, useContext} from 'react'
import axios from 'axios'
import {createStackNavigator} from '@react-navigation/stack'
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
  const {images, findImages} = useContext(ImageContext);

  return (
    <Center>
      <Text>
      Search by Keyword Tags,
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
  const {images} = useContext(ImageContext);

  return (
    <View>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => {
          return (
            <TouchableOpacity>
              <Image
                source={{uri:item.previewURL}}
                style={{
                  width: item.previewWidth,
                  height: item.previewHeight
                }}
                id={item.id}
              />
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

export const AppTabs = ({}) => {
  return (
    <NavigationContainer>
      <Tabs.Navigator initialRouteName='Search'>
        <Tabs.Screen name='Search' title='Search' component={Search}/>
        <Tabs.Screen name='Results' title='Results' component={Results}/>
      </Tabs.Navigator>
    </NavigationContainer>
  );
}