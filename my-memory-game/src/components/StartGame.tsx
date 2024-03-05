import { useState } from "react";

export default function StartGame(props:any){

    const handleStart=()=>{
       props.setStartClicked(!props.startStatus)
    }
    return (
        <>
            
            <button className={props.className} onClick={handleStart}>Start Game
            </button>
            <h1 className="header-loader">
                <span className="let1">l</span>  
                <span className="let2">o</span>  
                <span className="let3">a</span>  
                <span className="let4">d</span>  
                <span className="let5">i</span>  
                <span className="let6">n</span>  
                <span className="let7">g</span>  
            </h1>
        </>
    )
}