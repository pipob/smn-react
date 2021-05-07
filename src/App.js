import React, { useState, useEffect } from 'react'
import './style.css'

import Menu from './Menu/Menu.js'
import BuildDeck from './BuildDeck/BuildDeck.js'

export default function App() {
  const [token, setToken] = useState('')
  const [verify, setVerify] = useState(true)

  useEffect(() => {  

  }, [token])

  const [main, setMain] = useState('')

  return (
    <div>
      { verify && <Menu setMain={setMain} /> }
      { main === 'build_deck' && <BuildDeck /> }
    </div>
  )
}
