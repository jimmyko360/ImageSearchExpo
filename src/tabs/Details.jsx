import React, {useContext} from 'react'
import {Image, Text} from 'react-native'
import {Center} from '../Center.jsx'
import {ImageContext} from '../ImageProvider.jsx'

export const Details = ({navigation}) => {
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