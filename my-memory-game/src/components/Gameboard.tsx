import { useEffect, useState } from "react";
import pokeballPng from './../assets/pokeball-pokemon-svgrepo-com.svg';
import { Card } from "./Card";
type Pokemon=any;


export default function Gameboard(){
    const [score,setScore]=useState(0);
    const [transformedPokemonData, setTransformedPokemonData]=useState<Pokemon[]>([]);
    const totalPokemons = 840; 
    const [gameStatus, setGameStatus]=useState("");
    const [responseId, setResponseId]=useState<Number[]>([]);
    useEffect(()=>{
        
       async function fetchPokemonData(){
        const Promises=[];
        for(let i=1;i<=9;i++){
        const randomId = Math.floor(Math.random() * totalPokemons) + 1;
        console.log(randomId);
        let url=`https://pokeapi.co/api/v2/pokemon/${randomId}`;
        const request=await fetch(url)
        let requestJSON=await request.json();
        Promises.push(requestJSON);
        }
       const data=await Promise.all(Promises);
       transformPokemonData(data);
    }
       fetchPokemonData();
    },[])

    const transformPokemonData=(data: Pokemon[])=>{
        const transformedData=data.map((pokemon)=>({
            id:pokemon.id,
            name:pokemon.name,
            image:pokemon.sprites.front_default,
        }));
        setTransformedPokemonData(transformedData);
    }
    const shuffleCards = () => {
        const shuffledData = [...transformedPokemonData].sort(() => Math.random() - 0.5);
        setTransformedPokemonData(shuffledData);
    };

    const checkResponses=(id:number)=>{
        const found=responseId.find((element)=>element===id);
        if(found){
            setScore((prevScore)=>prevScore-1);
        }
        else{
            setScore((prevScore)=>prevScore+1);
        }
    }
    const recordResponse=(id:number)=>()=>{
        const arr=[...responseId,id];
        setResponseId(arr);
        checkResponses(id);
        checkWinner();
        shuffleCards();
    }



    useEffect(()=>{
        checkWinner();
    },[score])



    const checkWinner=()=>{
        if(score>5){
            setGameStatus("win");
        }
        else if(score<0){
            setGameStatus("loose");
        }
    }

    return (
        <>
           <div className="container  mx-auto py-8 px-4">
           <div className="header text-center text-4xl font-bold text-red-600 mb-8 bg-gray-400 py-2 px-4 rounded-md shadow-lg">
    <img src={pokeballPng} className="w-16 inline mr-2" alt="Pokeball"/>
    Pokémon Memory Game
</div>
                <div className="scoreCard text-xl font-semibold text-right">Score: {score}</div>
                <div className="grid grid-rows-3 grid-cols-3 gap: 4">
                {transformedPokemonData.map((pokemonItem)=>{
                    return <button className="bg-gray-200 opacity-80 hover:bg-gray-100 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-all" key={pokemonItem.id} onClick={recordResponse(pokemonItem.id)}>
                        <Card key={`${pokemonItem.id}`} img={pokemonItem.image} name={pokemonItem.name}/></button>
                })}
                </div>
                {(gameStatus==="win")&&(<div className="text-2xl font-bold bg-yellow-200 text-green-500 mt-4">You Win Congrats!!! Party Broooooo</div>)}
                {(gameStatus==="loose")&&(<div className="text-2xl font-bold bg-yellow-200 text-red-500 mt-4">You Loose, Koi nhi bhai! Ho jaega</div>)}
           </div>
        </>
    )
  
   }


