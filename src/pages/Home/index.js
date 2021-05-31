import React from 'react'
import { Text } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import { Feather } from '@expo/vector-icons'

import StatusBarPage from '../../components/StatusBarPage'
import Menu from '../../components/Menu'

import logo from '../../assets/Logo.png'

import { ContainerLogo, Logo, Container, LinkInput, ButtonLink } from './styles'

export default function Home() {
  return (
    <LinearGradient 
      colors={['#1ddbb9', '#132742']}
      style={{flex: 1, justifyContent: 'center'}}
    >
      <StatusBarPage 
        backgroundColor="#1ddbb9"
        barStyle="light-content"
      />
      
      <Menu />
      
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
            placeholder="Cole seu link aqui"
            placeholderTextColor="#fff"
          />
        </LinkInput>

        <ButtonLink>
          <ButtonLink.Text>
            Gerar link
          </ButtonLink.Text>
        </ButtonLink>

      </Container>

    </LinearGradient>
  )
}