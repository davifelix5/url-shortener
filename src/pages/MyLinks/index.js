import React, { useState } from 'react'
import { Modal } from 'react-native'

import StatusBarPage from '../../components/StatusBarPage'
import Menu from '../../components/Menu'
import ListItem from '../../components/ListItem'
import LinkModal from '../../components/LinkModal'

import { Container, Title, ListLinks } from './styles'

import usePersistedState from '../../hooks/usePersistedState'

export default function MyLinks() {
  const [links, setLinks] = usePersistedState('@links', [])
  const [openedLink, setOpenedLink] = useState(null)
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
        renderItem={({ item }) => <ListItem item={item} setOpenedLink={setOpenedLink} />}
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