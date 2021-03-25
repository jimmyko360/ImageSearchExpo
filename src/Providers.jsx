import React from 'react'
import {ImageProvider} from './ImageProvider.jsx'
import {AppTabs} from './AppTabs.jsx'

export const Providers = () => {
  return (
    <ImageProvider>
      <AppTabs/>
    </ImageProvider>
  )
};