import React from 'react'

export const ImageContext = React.createContext({
  //what goes in here?
  //do I need to pass in a default state object here?
  //or is that just for typescript?
  //Flamingo doesn't pass anything into createContext
});

export const ImageProvider = ({children}) => {
  const [image, setImage] = React.useState('');
  return (
    <ImageContext.Provider value={{
      image
      //the GET request may need to be here
    }}>
      {children}
    </ImageContext.Provider>
  )
}