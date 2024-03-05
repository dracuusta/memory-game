import React, { useEffect, useState } from "react";

export default function Modal(props:any) {
    const [gameStatus, setGameStatus] = useState(props.gameStatus);

    const toggleGameStatus = () => {
        setGameStatus("");
        window.location.reload();
    };

    useEffect(() => {
        setGameStatus(props.gameStatus);
    }, [props.gameStatus]);

    return (
        <>
            {gameStatus === "win" && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="overlay" onClick={toggleGameStatus}></div>
                    <div className="modal-content rounded-lg bg-green-500 text-white p-6 m-4 shadow-lg max-w-sm w-full">
                        <h2 className="text-xl font-bold mb-4">Congratulations!</h2>
                        <p>You Win! 🎉</p>
                        <button onClick={toggleGameStatus} className="mt-4 bg-white text-green-500 font-bold py-2 px-4 rounded hover:bg-gray-100 transition-colors">
                            Play Again
                        </button>
                    </div>
                </div>
            )}
            {gameStatus === "loose" && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="overlay" onClick={toggleGameStatus}></div>
                    <div className="modal-content rounded-lg bg-red-500 text-white p-6 m-4 shadow-lg max-w-sm w-full">
                        <h2 className="text-xl font-bold mb-4">Game Over</h2>
                        <p>You Lost! 😢 Try Again?</p>
                        <button onClick={toggleGameStatus} className="mt-4 bg-white text-red-500 font-bold py-2 px-4 rounded hover:bg-gray-100 transition-colors">
                            Try Again
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
