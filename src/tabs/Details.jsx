import React, {useContext, useEffect, useRef} from 'react'
import {Image, Text, Button} from 'react-native'
import {Center} from '../Center.jsx'
import {ImageContext} from '../ImageProvider.jsx'

export const Details = ({navigation}) => {
  const {
    details,
    findImages,
    id,
    searchTags,
    getDetails
  } = useContext(ImageContext);

  const firstUpdate = useRef(true);

  useEffect(()=> {
    if (firstUpdate.current) {
      firstUpdate.current = false;
    } else {
      getDetails();
    }
  }, [id])

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