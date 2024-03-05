import { useEffect, useState } from "react";
import './../App.css';


export default function Modal(props:any){

    const [gameStatus,setGameStatus]=useState(props.gameStatus);
    const toggleGameStatus=()=>{
        setGameStatus("");
        refreshPage();
    }
    const refreshPage = () => {
        window.location.reload();
      };

    useEffect(()=>{
        setGameStatus(props.gameStatus);
    },[props.gameStatus])
    
    return (
        <>
        {gameStatus==="win" && (
            <div className="modal">
            <div className="overlay" onClick={toggleGameStatus}></div>
            <div className="modal-content rounded-md bg-red-500 text-red-50">
            <p>You Win! Congats</p>
            </div>
        </div>
        
        )}
        {gameStatus==="loose" && (
            <div className="modal">
            <div className="overlay" onClick={toggleGameStatus}></div>
            <div className="modal-content">
                <p>You Loose! SADDDDDD</p>
            </div>
            <button className="close-modal">
                CLOSE
            </button>
        </div>
        
        )}
         
        
        </>
    )
}