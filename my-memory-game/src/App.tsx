import { useState } from 'react';
import './App.css'
import Gameboard from './components/Gameboard'
import StartGame from './components/StartGame'

function App() {
  const [startClicked,setStartClicked]=useState(false);
  const [difficultyLevel, setDifficultyLevel]=useState("")
  console.log(difficultyLevel);
  return (
    <>
    {!startClicked&&(<StartGame className="startGame" difficultyLevel={difficultyLevel} setDifficultyLevel={setDifficultyLevel} startStatus={startClicked} setStartClicked={setStartClicked}/>)}
    {startClicked&&(<Gameboard difficultyLevel={difficultyLevel}/>)}
    </>
  )
}

export default App
