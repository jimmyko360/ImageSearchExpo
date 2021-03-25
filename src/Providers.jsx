import React from 'react'
import {ImageProvider} from './ImageProvider.jsx'
import {Routes} from './Routes.jsx'

export const Providers = () => {
  return (
    <ImageProvider>
      <Routes/>
    </ImageProvider>
  )
};