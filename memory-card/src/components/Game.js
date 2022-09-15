import React, { useState } from "react";
import CardGrid from "./CardGrid";

function Game(){
    const [score, setScore] = useState(0);
    // const [highScore, setHighScore] = useState(0);
    // const [cardArray, addCard] = useState([]);

    const updateScore = () => {
        setScore(score+1)
        console.log("Current score is: " + score)
    }

    return (
        <>
            <CardGrid updateScore={updateScore} />
        </>
    )
}

export default Game;