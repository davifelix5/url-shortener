import React, { useState, useContext } from 'react'
import { FlatList, Modal } from 'react-native'

import StatusBarPage from '../../components/StatusBarPage'
import Menu from '../../components/Menu'
import ListItem from '../../components/ListItem'
import LinkModal from '../../components/LinkModal'

import { Container, Title, WarningText, EmptyContainer } from './styles'

import LinksContext from '../../contexts/links'

export default function MyLinks() {
  const { links } = useContext(LinksContext)
  const [openedLink, setOpenedLink] = useState(null)
  return (
    <Container>
      <StatusBarPage 
        backgroundColor="#132742"
        barStyle="light-content"
      />
      <Menu />
      <Title>Meus links</Title>
      
      {links.length === 0 && (
        <EmptyContainer>
          <WarningText>
            Você ainda não possui nenhum link :(
          </WarningText>
        </EmptyContainer>
      )}
      
      <FlatList 
        data={links}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ListItem item={item} onPress={() => setOpenedLink(item)} />}
        contentContainerStyle={{paddingBottom: 20}}
        showsVerticalScrollIndicator={false}
      />
      <Modal 
          visible={Boolean(openedLink)}
          transparent 
          animationType="slide"
        >
          <LinkModal 
            longURL={openedLink?.originalLink} 
            shortURL={openedLink?.shortLink} 
            onClose={() => setOpenedLink(null)} 
          />
        </Modal>
    </Container>
  )
}