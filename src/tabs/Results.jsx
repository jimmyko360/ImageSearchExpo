import React, {useContext} from 'react'
import {View, FlatList, TouchableOpacity, Image} from 'react-native'
import {ImageContext} from '../ImageProvider.jsx'


export const Results = ({navigation}) => {
  const {images, getDetails} = useContext(ImageContext);

  return (
    <View>
      <FlatList
        data={images}
        contentContainerStyle={{
          alignItems:'center',
          justifyContent:'center'
        }}
        style={{
          width: '100%'
        }}
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
    </View>
  )
}