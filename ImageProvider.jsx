import React, {useState, createContext} from 'react'
import axios from 'axios'
import {API_TOKEN} from './config.js'

export const ImageContext = createContext({
  //what goes in here?
  //do I need to pass in a default state object here?
  //or is that just for typescript?
  //Flamingo doesn't pass anything into createContext
});

export const ImageProvider = ({children}) => {
  const [images, setImages] = useState([]);
  return (
    <ImageContext.Provider value={{
      images,
      findImages: (searchString) => {
        axios.get(`https://pixabay.com/api/?key=${API_TOKEN}&image_type=photo&q=${searchString}`)
        .then((results)=>{
          setImages(results.data.hits)
        })
        .catch((err) => {
          console.log('Error Searching Images:', err)
        })
      }
    }}>
      {children}
    </ImageContext.Provider>
  )
}