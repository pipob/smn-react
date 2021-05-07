import React, { useState, useEffect } from 'react'

const cardDB = [
  { id: 'd4k-001', name: 'Firat', 
    pictureUrl: 'http://www.phenomenonparty.com/card_database/smncardpic/n001/1.jpg' },
  { id: 'd4k-002', name: 'Golden Horn Unicorn', 
    pictureUrl: 'http://www.phenomenonparty.com/card_database/smncardpic/n001/2.jpg' },
  { id: 'd4k-003', name: 'Fairy Music Box', 
    pictureUrl: 'http://www.phenomenonparty.com/card_database/smncardpic/n001/3.jpg' },

  { id: 'exi-001', name: 'Thorny Lion', 
    pictureUrl: 'http://www.phenomenonparty.com/card_database/smncardpic/n002/1.jpg' },
  { id: 'exi-002', name: 'Phoebus', 
    pictureUrl: 'http://www.phenomenonparty.com/card_database/smncardpic/n002/2.jpg' },
]

const CardDatabase = () => {
  const [cardSetId, setCardSetId] = useState('')
  const [cardsSet, setCardsSet] = useState([])

  useEffect(() => { 
    cardSetId && setCardsSet(cardDB.filter((card) => card.id.startsWith(cardSetId)))
  }, [cardSetId])


  return(
    <div>
      <select className="form-select" defaultValue=''
        onChange={(event) => { setCardSetId(event.target.value) }}>
        <option value='' disabled>== Select Card Set ==</option>
        <option value='d4k'> Divinding of 4 Kingdoms </option>
        <option value='exi'> Exigency </option>
        <option value='sec'> Secondary D4K </option>
        <option value='12v'> 12 Valkyries </option>
        <option value='ekk'> Ekklesia </option>
      </select>

      <div>
        { cardsSet.map((card) => <CardData card={card}/> ) }
      </div>
    </div>
  )
}

const CardData = ({ card }) => {
  return(
    <div>
      <div>{card.name}</div>
      <img src={card.pictureUrl} />
    </div>
  )
}

export default CardDatabase