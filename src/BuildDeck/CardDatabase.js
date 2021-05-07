import React, { useState, useEffect } from 'react'



const CardDatabase = ({ cardDB, deckList, setDeckList }) => {

  const [cardSetId, setCardSetId] = useState('')
  const [cardsSet, setCardsSet] = useState([])

  useEffect(() => { 
    cardSetId && setCardsSet(cardDB.filter((card) => card.id.startsWith(cardSetId)))
  }, [cardSetId])


  return(
    <div>
      <select className="form-select mb-2" defaultValue=''
        onChange={(event) => { setCardSetId(event.target.value) }}>
        <option value='' disabled>== Select Card Set ==</option>
        <option value='d4k'> Divinding of 4 Kingdoms </option>
        <option value='exi'> Exigency </option>
        <option value='sec'> Secondary D4K </option>
        <option value='12v'> 12 Valkyries </option>
        <option value='ekk'> Ekklesia </option>
      </select>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2">
        { cardsSet.map((card) => <CardData key={card.id} card={card} deckList={deckList} setDeckList={setDeckList}/> ) }
      </div>      

    </div>
  )
}

const CardData = ({ card, deckList, setDeckList }) => {
  let limit = card.limit || (card.type === 'seal' ? 4 : card.type === 'mystic' ? 2 : 0)
  let plus = deckList.filter((cardId) => cardId === card.id).length == limit ? 'disabled' : ''
  let minus = deckList.filter((cardId) => cardId === card.id).length == 0 ? 'disabled' : ''

  return(
    <div className="col">
      <div className="border rounded-2 p-2 d-grid gap-2">
        <div className="fw-bold text-truncate" style={{fontFamily: 'Noto'}}>{card.name}</div>
        <img className="rounded-2" src={card.pictureUrl} style={{width:'100%', height: 'auto'}}/>
        <div className="d-flex justify-content-between">
          <button className={`px-2 btn btn-sm btn-outline-danger ${minus}`}
            onClick={() => { setDeckList((deck) => deck.splice(deck.findIndex(cardId => cardId === card.id), 1) && [...deck]) }}
          ><i className="fas fa-minus"></i></button>

          <div>{deckList.filter((list) => list === card.id).length}</div>
          <button className={`px-2 btn btn-sm btn-outline-primary ${plus}`}
            onClick={() => { setDeckList((deck) => [...deck, card.id]) }}
          ><i className="fas fa-plus"></i></button>
        </div>     
      </div>
    </div>
  )
}

export default CardDatabase