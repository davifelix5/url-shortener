import styled from 'styled-components/native'
import { Platform } from 'react-native'


export const ContainerLogo = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${Platform.OS === 'ios' ? 35 : 15}px;

`
export const Container = styled.View`
  margin-top: ${Platform.OS === 'ios' ? 25 : 15}%;

`

Container.Title = styled.Text`
  font-size: 35px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`

Container.Subtitle = styled.Text`
  font-size: 18px;
  text-align: center;
  padding-bottom: 10%;
  color: #fff;

`

export const LinkInput = styled.View`
  align-items: center;
  flex-direction: row;
  width: 100%;
  border-radius: 7px;
  margin: 15px 0;
  padding: 0 15px;
`

LinkInput.BoxIcon = styled.View`
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  width: 11%;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.15);
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
`

LinkInput.TextInput = styled.TextInput`
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 50px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.15);
  color: #fff;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  font-size: 17px;
`

export const ButtonLink = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 45px;
  background-color: #fff;
  margin: 0 15px;
  border-radius: 7px;
  margin-bottom: 15px;
`

ButtonLink.Text = styled.Text`
  font-size: 18px;
`


export const Logo = styled.Image`
  width: 150px;
  height: 150px

`
