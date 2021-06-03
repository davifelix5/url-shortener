import React, { useState, useContext } from 'react'
import { 
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Modal,
  ActivityIndicator,
} 
from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import { Feather } from '@expo/vector-icons'

import StatusBarPage from '../../components/StatusBarPage'
import LinkModal from '../../components/LinkModal'
import Menu from '../../components/Menu'

import logo from '../../assets/Logo.png'

import { ContainerLogo, Logo, Container, LinkInput, ButtonLink } from './styles'

import api from '../../services/api'  

import LinksContext from '../../contexts/links'

export default function Home() {
  const { addLink } = useContext(LinksContext)
  const [input, setInput] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [shortURL, setShortURL] = useState('')
  const [longURL, setLongURL] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit() {
    setLoading(true)
    try {
      const response = await api.post('/shorten', {
        long_url: input
      })
      const { link, long_url, id } = response.data
      const newLink = {
        id,
        shortLink: link,
        originalLink: long_url,
      }
      setShortURL(link)
      setLongURL(long_url)
      setModalVisible(true)
      addLink(newLink)
    } catch (err) {
      alert(`Erro ao fazer a requisição: ${err.message}`)
      Keyboard.dismiss()
    } finally {
      Keyboard.dismiss()
      setInput('')
      setLoading(false)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient 
        colors={['#1ddbb9', '#132742']}
        style={{flex: 1, justifyContent: 'center'}}
      >
        <StatusBarPage 
          backgroundColor="#1ddbb9"
          barStyle="light-content"
        />
        
        <Menu />

        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'position' : 'padding'}
          enabled
        >
          <ContainerLogo>
            <Logo source={logo} />
          </ContainerLogo>
          
          <Container>
            
            <Container.Title>
              URL-shortener
            </Container.Title>
            <Container.Subtitle>
              Cole seu link para encurtar
            </Container.Subtitle>

            <LinkInput>
              
              <LinkInput.BoxIcon>
                <Feather name="link" size={22} color="#fff" />
              </LinkInput.BoxIcon>
              <LinkInput.TextInput
                value={input}
                onChangeText={setInput}
                placeholder="Cole seu link aqui"
                placeholderTextColor="#fff"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="url"
              />
            </LinkInput>

            <ButtonLink onPress={handleSubmit}>
              {loading ? <ActivityIndicator color="#121212" size={24} /> : (
                <ButtonLink.Text>
                  Gerar link
                </ButtonLink.Text>
              )}
            </ButtonLink>

          </Container>
        </KeyboardAvoidingView>

        <Modal 
          visible={modalVisible}
          transparent 
          animationType="slide"
        >
          <LinkModal longURL={longURL} shortURL={shortURL} onClose={() => setModalVisible(false)} />
        </Modal>

      </LinearGradient>
    </TouchableWithoutFeedback>
  )
}