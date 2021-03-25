import React, {useState, useContext} from 'react'
import {Text, Button, TextInput, StyleSheet} from 'react-native'
import {Center} from '../Center.jsx'
import {ImageContext} from '../ImageProvider.jsx'

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    margin: 15,
    borderWidth: 1,
  },
});

export const Search = ({navigation}) => {
  const [text, onChangeText] = useState('');
  const {findImages} = useContext(ImageContext);

  return (
    <Center>
      <Text
        style={{
          textAlign: 'center'
        }}
      >
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