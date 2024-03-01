import { useEffect, useState } from "react";
import Card from "./Card";
type Pokemon=any;


export default function Gameboard(){
    const [score,setScore]=useState(0);
    const [transformedPokemonData, setTransformedPokemonData]=useState<Pokemon[]>([]);
    const totalPokemons = 400; 
    const numberOfPokemonsToFetch = 9;
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
            setScore(score-1);
        }
        else{
            setScore(score+1);
        }
        checkWinner();
    }
    const recordResponse=(id:number)=>()=>{
        const arr=[...responseId,id];
        setResponseId(arr);
        checkResponses(id);
        shuffleCards();
    }

    const checkWinner=()=>{
        if(score>5){

        }
    }

    return (
        <>
           <div className="container">
                <div className="header">Memory Game</div>
                <div className="scoreCard">{score}</div>
                <div className="grid grid-rows-3 grid-cols-3">
                {transformedPokemonData.map((pokemonItem, index)=>{
                    return <button key={pokemonItem.id} onClick={recordResponse(pokemonItem.id)}><Card key={`${pokemonItem.id}`} img={pokemonItem.image} name={pokemonItem.name}/></button>
                })}
                </div>
                <div className="invisible">You Win Congrats!!! Party Broooooo</div>
                <div className="invisible">You Loose, Koi nhi bhai! Ho jaega</div>
           </div>
        </>
    )
  
   }


