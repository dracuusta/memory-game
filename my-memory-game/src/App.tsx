import { useState } from 'react';
import './App.css'
import Gameboard from './components/Gameboard'
import StartGame from './components/StartGame'

function App() {
  const [startClicked,setStartClicked]=useState(false);


  return (
    <>
    {!startClicked&&(<StartGame className="startGame" startStatus={startClicked} setStartClicked={setStartClicked}/>)}
    {startClicked&&(<Gameboard/>)}
    </>
  )
}

export default App
