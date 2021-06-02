import React, { useState } from 'react'
import { 
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Modal 
} 
from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import { Feather } from '@expo/vector-icons'

import StatusBarPage from '../../components/StatusBarPage'
import LinkModal from '../../components/LinkModal'
import Menu from '../../components/Menu'

import logo from '../../assets/Logo.png'

import { ContainerLogo, Logo, Container, LinkInput, ButtonLink } from './styles'

export default function Home() {
  
  const [input, setInput] = useState('')
  const [modalVisible, setModalVisible] = useState(false)

  function handleSubmit() {
    setModalVisible(true)
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
              <ButtonLink.Text>
                Gerar link
              </ButtonLink.Text>
            </ButtonLink>

          </Container>
        </KeyboardAvoidingView>

        <Modal 
          visible={modalVisible}
          transparent 
          animationType="slide"
        >
          <LinkModal onClose={() => setModalVisible(false)} />
        </Modal>

      </LinearGradient>
    </TouchableWithoutFeedback>
  )
}