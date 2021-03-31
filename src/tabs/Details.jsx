import React, {useContext, useEffect} from 'react'
import {Image, Text, Button} from 'react-native'
import {Center} from '../Center.jsx'
import {ImageContext} from '../ImageProvider.jsx'
import axios from 'axios'
import {API_TOKEN} from '../../config.js'

export const Details = ({navigation}) => {
  const {details, findImages, id, setId, setDetails} = useContext(ImageContext);
  // const searchTags = details.tags.split(',')
  let searchTags = [];

  useEffect(()=> {
    axios.get(`https://pixabay.com/api/?key=${API_TOKEN}&image_type=photo&id=${id}`)
    .then((results) => {
      setDetails(results.data.hits[0]);
    }).then(()=> {
      searchTags = details.tags.split(',');
    })
    .catch((err) => {
      console.log('Error Getting Image Details:', err)
    })
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