import 'react-native-gesture-handler'
import React from 'react'
import Routes from './src/routes'
import { NavigationContainer } from '@react-navigation/native'
import { LinksProvider } from './src/contexts/links'

export default function App() {
  return (
    <NavigationContainer>
      <LinksProvider>
        <Routes />
      </LinksProvider>
    </NavigationContainer>
  )
}
