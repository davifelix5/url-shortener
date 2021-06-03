import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function usePersistedState(key, defaultValue) {
  const [state, setState] = useState(defaultValue)

  ;(async function getInitialValue() {
    const currentValue = await AsyncStorage.getItem(key)
    if (currentValue) {
      setState(JSON.parse(currentValue))
    } else {
      await AsyncStorage.setItem(key, JSON.stringify(defaultValue))
    }
  })() 

  const setPersistedState = async (newValue) => {
      await AsyncStorage.setItem(key, JSON.stringify(newValue))
      setState(newValue)
  }

  return [state, setPersistedState]
}