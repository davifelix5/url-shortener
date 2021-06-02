import React from 'react'
import { View, } from 'react-native'

import { Feather } from '@expo/vector-icons'

import { ContainerButton, Link } from './styles'

export default function ListItem({ item, setOpenedLink }) {
  return (
    <View>
      <ContainerButton activeOpacity={0.9} onPress={() => setOpenedLink(item)}>
        <Feather name="link" color="#fff" size={24} />
        <Link numberOfLines={1}>{item.originalLink}</Link>
      </ContainerButton>
    </View>
  )
}