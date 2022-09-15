import React, { useState } from "react";
import Card from "./Card";

function Game(){
    const [score, setScore] = useState(0);
    // const [highScore, setHighScore] = useState(0);
    // const [cardArray, addCard] = useState([]);

    const updateScore = () => {
        setScore(score+1)
        console.log(score)
    }

    return (
        <>
            <Card updateScore={updateScore} />
        </>
    )
}

export default Game;