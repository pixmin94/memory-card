import React, { useState } from "react";
import Header from "./Header"
import CardGrid from "./CardGrid";

function Game(){
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [cardsArray, addCard] = useState([]);

    const updateHighScore = () => {
        if (score > highScore) {
            setHighScore(score)
        }
    }

    const reset = () => {
        setScore(0);
        addCard([]);
    }

    const updateScore = (cardName) => {
        if (!cardsArray.includes(cardName)) {
            addCard((prevArray) => [...prevArray,cardName])
            setScore(score+1)
            console.log(score)
        } else {
            updateHighScore();
            reset();
        }
    }

    return (
        <>
            <Header score={score} highScore={highScore}/>
            <CardGrid updateScore={updateScore} />
        </>
    )
}

export default Game;