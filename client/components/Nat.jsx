import React from 'react'
import JokeButton1 from './Buttons/Joke-Button1'
import RandomButton from './Buttons/Random-Button'
import randomWords from 'random-words'

const Nat = () => {
  return (
    <div>
      <div id="joke-button1">
        <JokeButton1 clickMsg='Why did the programmer quit her job?' unClick="Because she didn't get arrays"/>
      </div>
      <div id="random-button">
        <RandomButton clickMsg='Click for a random word' unClick=''/>
      </div>
    </div>
  )
}
export default Nat
