import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { Feather } from '@expo/vector-icons'

import { ButtonMenu } from './styles'

export default function Menu() {
  const navigation = useNavigation()
  return (
    <ButtonMenu onPress={navigation.openDrawer}>
      <Feather name="menu" color="#fff" size={40} />
    </ButtonMenu>
  )
}