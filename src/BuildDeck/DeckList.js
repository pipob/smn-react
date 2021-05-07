import React, { useState, useEffect } from 'react'

const DeckList = ({ cardDB, deckList }) => {
  const [deckSet, setDeckSet] = useState([])
  
  useEffect(() => { 
    setDeckSet([...new Set(deckList)])
  }, [deckList])

  return(
    <div className="d-grid">
      <h5> Deck List </h5>
      { deckSet.map((cardId) => <DeckCard cardDB={cardDB} cardId={cardId} deckList={deckList} /> )   }
    </div>
  )
}

const DeckCard = ({ cardDB, cardId, deckList}) => {
  return(
    <div className="d-flex justify-content-between p-2 border">
      <div>{cardDB.find(card => card.id === cardId).name}</div>
      <div>{deckList.filter((list) => list === cardId).length}</div>
    </div>
  )
}

export default DeckList