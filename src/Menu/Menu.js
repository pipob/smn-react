import React from 'react'

const Menu = ({ setMain}) => {
  return(
    <div>
      Menu
      <ul>
        <li onClick={() => { setMain('build_deck') }}>Build Deck</li>
        <li onClick={() => { setMain('play_game') }}>Play Game</li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}


export default Menu

