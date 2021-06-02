import React from 'react'
import { View, Text } from 'react-native'

import StatusBarPage from '../../components/StatusBarPage'
import Menu from '../../components/Menu'
import ListItem from '../../components/ListItem'

import { Container, Title, ListLinks } from './styles'

export default function MyLinks() {
  return (
    <Container>
      <StatusBarPage 
        backgroundColor="#132742"
        barStyle="light-content"
      />
      <Menu />
      <Title>Meus links</Title>
      <ListLinks 
        data={[{id: 1, links: 'https://google.com'}]}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ListItem data={item} />}
        contentContainerStyle={{paddingBottom: 20}}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}