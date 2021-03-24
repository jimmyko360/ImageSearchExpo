import React, {useState, createContext} from 'react'

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
      images
      //the GET request may need to be here
    }}>
      {children}
    </ImageContext.Provider>
  )
}