import React, {useState, createContext} from 'react'
import axios from 'axios'
import {API_TOKEN} from '../config.js'

export const ImageContext = createContext({});

export const ImageProvider = ({children}) => {
  const [images, setImages] = useState([]);
  const [details, setDetails] = useState({
    tags: 'click, me'
  });

  return (
    <ImageContext.Provider value={{
      images,
      details,
      findImages: (searchString) => {
        axios.get(`https://pixabay.com/api/?key=${API_TOKEN}&image_type=photo&q=${searchString}`)
        .then((results)=>{
          setImages(results.data.hits)
        })
        .catch((err) => {
          console.log('Error Searching Images:', err)
        })
      },
      getDetails: (imageID) => {
        axios.get(`https://pixabay.com/api/?key=${API_TOKEN}&image_type=photo&id=${imageID}`)
        .then((results) => {
          setDetails(results.data.hits[0])
        })
        .catch((err) => {
          console.log('Error Getting Image Details:', err)
        })
      }
    }}>
      {children}
    </ImageContext.Provider>
  )
}