import React, { useState, useEffect } from 'react'

import CardDatabase from './CardDatabase.js'
import DeckList from './DeckList.js'

const cardDB = [
  { id: 'd4k-001', name: 'Firat', type: 'seal',
    pictureUrl: 'https://firebasestorage.googleapis.com/v0/b/smn-react.appspot.com/o/card_database%2Fs001%2F1.jpg?alt=media&token=fee399bc-13b9-412c-9c72-4a47c92db5b7' },
  { id: 'd4k-002', name: 'Golden Horn Unicorn', type: 'seal',
    pictureUrl: 'https://firebasestorage.googleapis.com/v0/b/smn-react.appspot.com/o/card_database%2Fs001%2F2.jpg?alt=media&token=3ae7fc87-4680-40ed-9f9e-2e8325e42afb' },
  { id: 'd4k-003', name: 'Fairy Music Box', type: 'seal',
    pictureUrl: 'https://firebasestorage.googleapis.com/v0/b/smn-react.appspot.com/o/card_database%2Fs001%2F3.jpg?alt=media&token=8541233e-fd96-4054-a4f1-75d8d25b77cf' },

  { id: 'exi-001', name: 'Thorny Lion', type: 'seal',
    pictureUrl: 'https://firebasestorage.googleapis.com/v0/b/smn-react.appspot.com/o/card_database%2Fs002%2F1.jpg?alt=media&token=18244cfa-1802-4bb1-9601-681eb569a937' },
  { id: 'exi-002', name: 'Phoebus', type: 'seal', limit: 1,
    pictureUrl: 'https://firebasestorage.googleapis.com/v0/b/smn-react.appspot.com/o/card_database%2Fs002%2F2.jpg?alt=media&token=7e3a340d-4a7c-4449-917d-a9db74f9e4d9' },
]


const BuildDeck = () => {
  
  const [deckList, setDeckList] = useState([])

  console.log(deckList)
  return(
    <div className="container"> 
      <div className="row">
        <div className="col-6 col-sm-4 col-md-3">
          <DeckList cardDB={cardDB} deckList={deckList}/>
        </div>
        <div className="col-6 col-sm-8 col-md-9">
          <CardDatabase cardDB={cardDB} deckList={deckList} setDeckList={setDeckList}/>
        </div>
      </div>
    </div>
  )
}

export default BuildDeck

