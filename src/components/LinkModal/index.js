import React from 'react'
import { TouchableOpacity, View, TouchableWithoutFeedback, Share } from 'react-native'

import {
   ModalContainer,
   Container,
   LinkArea,
   Title,
   LongUrl,
   ShorLinkArea,
   ShortLinkUrl 
} from './styles'

import { Feather } from '@expo/vector-icons'
import Clipboard from 'expo-clipboard'

export default function LinkModal({ onClose, longURL, shortURL }) {
  
  function handleCopyLink() {
    Clipboard.setString(shortURL)
    alert('Link copiado com sucesso')
  }
  
  async function handleShare() {
    try {
      const result = await Share.share({
        message: `Link: ${shortURL}`
      }) 
      if (result.action === Share.sharedAction) {
        if (!result.activityType)
          alert('Compartilhado com sucesso')
      }
    } catch (err) {
      console.log('Error: ' + err)
    }

  }

  return (
    <ModalContainer>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={{flex: 1}} />
      </TouchableWithoutFeedback>
      <Container>
        <Container.Header>
          <TouchableOpacity onPress={onClose}>
            <Feather name="x" color="#212743" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleShare}>
            <Feather name="share" color="#212743" size={30} />
          </TouchableOpacity>
        </Container.Header>
        <LinkArea>
          <Title>Link encurtado</Title>
          <LongUrl numberOfLines={1}>
          {longURL}
          </LongUrl>
          <ShorLinkArea activeOpacity={1} onPress={handleCopyLink}>
            <ShortLinkUrl numberOfLines={1}>
              {shortURL}
            </ShortLinkUrl>
            <TouchableOpacity  onPress={handleCopyLink} >
              <Feather name="copy" color="#fff" size={25}/>
            </TouchableOpacity>
          </ShorLinkArea>
        </LinkArea>
      </Container>
    </ModalContainer>
  )
}