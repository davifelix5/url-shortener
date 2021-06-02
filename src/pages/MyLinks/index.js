import React from 'react'

import StatusBarPage from '../../components/StatusBarPage'
import Menu from '../../components/Menu'
import ListItem from '../../components/ListItem'

import { Container, Title, ListLinks } from './styles'

import usePersistedState from '../../hooks/usePersistedState'

export default function MyLinks() {
  const [links, setLinks] = usePersistedState('@links', [])
  return (
    <Container>
      <StatusBarPage 
        backgroundColor="#132742"
        barStyle="light-content"
      />
      <Menu />
      <Title>Meus links</Title>
      <ListLinks 
        data={links}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ListItem link={item.originalLink} />}
        contentContainerStyle={{paddingBottom: 20}}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}