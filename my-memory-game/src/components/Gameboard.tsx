import { useEffect, useState } from "react";
import pokeballPng from "./../assets/pokeball-pokemon-svgrepo-com.svg";
import { Card } from "./Card";
import Modal from "./Modal";
type Pokemon = any;

export default function Gameboard() {
  const audio = new Audio("./../public/button-124476.mp3");
  const [score, setScore] = useState(0);
  const [transformedPokemonData, setTransformedPokemonData] = useState<
    Pokemon[]
  >([]);
  const totalPokemons = 840;
  const [gameStatus, setGameStatus] = useState("");
  const [responseId, setResponseId] = useState<Number[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [movesCount, setMovesCount] = useState(0);
  useEffect(() => {
    async function fetchPokemonData() {
      const Promises = [];
      const uniqueIds = new Set();
      setLoading(true);
      while (uniqueIds.size < 9) {
        const randomId = Math.floor(Math.random() * totalPokemons) + 1;
        if (!uniqueIds.has(randomId)) {
          uniqueIds.add(randomId);
          let url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;
          const request = await fetch(url);
          const data = await request.json();
          Promises.push(data);
        }
      }
      const limitedPromises = Promises.slice(0, 9);
      transformPokemonData(limitedPromises);
      setLoading(false);
    }
    fetchPokemonData();
  }, []);

  const transformPokemonData = (data: Pokemon[]) => {
    const transformedData = data.map((pokemon) => ({
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.sprites.front_default,
    }));
    setTransformedPokemonData(transformedData);
  };
  const shuffleCards = () => {
    const shuffledData = [...transformedPokemonData].sort(
      () => Math.random() - 0.5
    );
    setTransformedPokemonData(shuffledData);
  };

  const checkResponses = (id: number) => {
    const found = responseId.find((element) => element === id);
    if (found) {
      setScore((prevScore) => prevScore - 1);
    } else {
      setScore((prevScore) => prevScore + 1);
    }
    setMovesCount((prevMove) => prevMove + 1);
  };
  const recordResponse = (id: number) => () => {
    const arr = [...responseId, id];
    start();
    setResponseId(arr);
    checkResponses(id);
    checkWinner();
    shuffleCards();
  };

  useEffect(() => {
    checkWinner();
  }, [score, movesCount]);

  const checkWinner = () => {
    if (score >= 5) {
      setGameStatus("win");
      setScore(0);
      setTransformedPokemonData([]);
      setMovesCount(0);
    } else if (score < 0 || movesCount > 8) {
      setGameStatus("loose");
      setScore(0);
      setTransformedPokemonData([]);
      setMovesCount(0);
    }
  };

  const start = () => {
    audio.play();
  };

  return (
    <>
      <div className="container  py-2 px-4">
        <div className="header-score flex justify-between">
            <div className="header-pokemon-game flex ">
          <div className="header flex text-center text-4xl font-bold text-white mb-8 py-2 px-4 rounded-md">
            <img
              src={pokeballPng}
              className="w-16 inline mr-2"
              alt="Pokeball"
            />
            <div className="header-pokemon text-yellow-200">
              Pokémon Memory Game
            </div>
            </div>
          </div>

          <div className="scoreCard text-3xl opacity-90 mb-[5%] rounded-lg  ml-[25%] mr-[25%] font-bold  text-white  ">
            Score: {score}
          </div>
        </div>
        {isLoading ? (
          <div className="pokeball"></div>
        ) : (
          <div className="grid grid-rows-3 grid-cols-3 gap: 4">
            {transformedPokemonData.map((pokemonItem) => {
              return (
                <button
                  className="bg-gray-200 hover:bg-gray-100 p-3 rounded-lg shadow-lg transform hover:scale-95 transition-all"
                  key={pokemonItem.id}
                  onClick={recordResponse(pokemonItem.id)}
                >
                  <Card
                    key={`${pokemonItem.id}`}
                    img={pokemonItem.image}
                    name={pokemonItem.name}
                  />
                </button>
              );
            })}
          </div>
        )}
      </div>
      <Modal gameStatus={gameStatus} />
    </>
  );
}
