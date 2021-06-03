import React, { useContext } from 'react'
import { View } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import { Feather } from '@expo/vector-icons'

import LinksContext from '../../contexts/links'

import { ContainerButton, Link, ActionsContainer } from './styles'

export default function ListItem({ item, onPress }) {

  const {
    removeLink
  } = useContext(LinksContext)

  function RightActions() {
    return (
      <ActionsContainer onPress={() => removeLink(item.id)}>
        <Feather name="trash" size={24} color="#fff" />
      </ActionsContainer>
    )
  }      
  
  return (
    <View>
      <Swipeable renderRightActions={RightActions}>
        <ContainerButton activeOpacity={0.9} onPress={onPress}>
          <Feather name="link" color="#fff" size={24} />
          <Link numberOfLines={1}>{item.originalLink}</Link>
        </ContainerButton>
      </Swipeable>
    </View>
  )
}