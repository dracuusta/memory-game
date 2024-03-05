import { useSelect } from '@mui/base'
import './StartGame.css'
import { useEffect, useState } from 'react'

export default function StartGame(props:any){
    const [difficultyState, setDifficultyState]=useState(props.difficultyLevel);

    const handleStart=()=>{
       props.setStartClicked(!props.startStatus)
    }

    const handleDifficulty=(e:any)=>{
        switch (e.target.innerHTML){
            case "2*2":
                props.setDifficultyLevel("EASY");
                setDifficultyState("Easy");
                break;

            case "3*3":
                props.setDifficultyLevel("MEDIUM");
                setDifficultyState("Medium");
                 break;
            case "4*4":
                props.setDifficultyLevel("HARD");
                setDifficultyState("Hard");
                break;
        }

    }

  

    
    return (
        <>
            <div className='difficulty-banner text-white font-bold text-4xl mt-20 -mb-44'>Current-Difficulty:{difficultyState||`Medium`}</div>
            <button className={props.className} onClick={handleStart}>Start Game
            </button>

            <div className='container-2'>
            <div className="difficulty flex justify-around mt-4">
                <button role="button" className="easy button-57 center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out" onClick={handleDifficulty}>
                <span className="text"></span>Easy<span className="text-hover">2*2</span>
                </button>

                <button role="button" className="medium  button-57 self-center bg-yellow-300 hover:bg-yellow-200 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out" onClick={handleDifficulty}>
                <span className="text"></span>Medium<span className="text-hover">3*3</span>
                </button>
                <button role="button" className="easy button-57 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out" onClick={handleDifficulty}>
                <span className="text"></span>Difficult<span className="text-hover">4*4</span>
                </button>
            </div>
            <div className="spinner-box inline">
  <div className="solar-system">
    <div className="earth-orbit orbit">
      <div className="planet earth"></div>
      <div className="venus-orbit orbit">
        <div className="planet venus"></div>
        <div className="mercury-orbit orbit">
          <div className="planet mercury"></div>
          <div className="sun"></div>
        </div>
      </div>
    </div>
  </div>
</div>
          </div>

        </>
    )
}