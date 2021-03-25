import React, {useContext} from 'react'
import {FlatList, TouchableOpacity, Image} from 'react-native'
import {Center} from '../Center.jsx'
import {ImageContext} from '../ImageProvider.jsx'


export const Results = ({navigation}) => {
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
              getDetails(item.id);
              navigation.navigate('Details');
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