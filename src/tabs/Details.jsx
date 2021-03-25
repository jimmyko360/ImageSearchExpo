import React, {useContext} from 'react'
import {Image, Text, Button} from 'react-native'
import {Center} from '../Center.jsx'
import {ImageContext} from '../ImageProvider.jsx'

export const Details = ({navigation}) => {
  const {details, findImages} = useContext(ImageContext);
  const searchTags = details.tags.split(',')

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
        Tags:
      </Text>
      {
        searchTags.map((searchTag) => {
          return (
            <Button
              key={searchTag}
              title={`#${searchTag}`}
              onPress={() => {
                let textSearch = searchTag.replace(/ /g, '+');
                findImages(textSearch);
                navigation.navigate('Results');
              }}
            />
          )
        })
      }
    </Center>
  )
}