import React from 'react'
import { createContext } from 'react'

import usePersistedState from '../hooks/usePersistedState'

const LinksContext = createContext({})

export function LinksProvider({children}) {
  const [links, setLinks] = usePersistedState('@links', [])

  function addLink(newLink) {
    const existingLink = links.find(link => link.id === newLink.id)
    if (existingLink)
      return
    setLinks([...links, newLink])
  }

  return (
    <LinksContext.Provider value={{
      links,
      addLink
    }}>
      {children}
    </LinksContext.Provider>
  )
}

export default LinksContext