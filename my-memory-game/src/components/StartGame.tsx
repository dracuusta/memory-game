import "./StartGame.css";
import { useState } from "react";
import pokeballPng from "./../assets/pokeball-pokemon-svgrepo-com.svg";
import pikachu from "./../assets/tenor.gif"
export default function StartGame(props: any) {
  const [difficultyState, setDifficultyState] = useState(props.difficultyLevel);

  const handleStart = () => {
    props.setStartClicked(!props.startStatus);
  };

  const handleDifficulty = (e: any) => {
    switch (e.target.innerHTML) {
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
  };

  return (
    <>
      <div className="header-pokemon-game flex ">
        <div className="header flex text-center text-4xl font-bold text-white mb-8 py-2 px-4 rounded-md">
          <img src={pokeballPng} className="w-16 inline mr-2" alt="Pokeball" />
          <div className="header-pokemon text-yellow-200">
            Pokémon Memory Game
          </div>
        </div>
      </div>

      <div className="difficulty-banner text-white font-bold text-4xl mt-20 -mb-44">
        Current-Difficulty:{difficultyState || `Medium`}
      </div>
      <button className={props.className} onClick={handleStart}>
        Start Game
      </button>

      <div className="container-2">
        <div className="difficulty flex justify-around mt-4">
          <button
            role="button"
            className="easy button-57 center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            onClick={handleDifficulty}
          >
            <span className="text"></span>Easy
            <span className="text-hover">2*2</span>
          </button>

          <button
            role="button"
            className="medium  button-57 self-center bg-yellow-300 hover:bg-yellow-200 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            onClick={handleDifficulty}
          >
            <span className="text"></span>Medium
            <span className="text-hover">3*3</span>
          </button>
          <button
            role="button"
            className="easy button-57 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            onClick={handleDifficulty}
          >
            <span className="text"></span>Difficult
            <span className="text-hover">4*4</span>
          </button>
        </div>
        <div className="loading-page">
       <img className="ml-32 mt-10" src={pikachu} width={250} height={250} alt="running-pikachu"/>
       </div>
      </div>
    </>
  );
}
