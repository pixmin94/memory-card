import React, { useState, useEffect } from "react";
import Card from "./Card";

import sana from '../img/sana.jpeg';
import tzuyu from '../img/tzuyu.jpeg';
import momo from '../img/momo.jpg';

function CardGrid(props) {
    const { updateScore } = props;
    let images = [
        {
            image: sana,
            name: 'Sana'
        },
        {
            image: tzuyu,
            name: 'Tzuyu'
        },
        {
            image: momo,
            name: 'Momo'
        }
    ]
    const [cards, setNewCards] = useState(images)

    const shuffleCards = (prevDeck) => {
        let cards = [...prevDeck];
        const length = cards.length;
        let shuffled = [];
        let r;

        for (let i = 0; i <length; i += 1){
            r = Math.floor(Math.random() * cards.length)
            shuffled = [...shuffled, ...cards.splice(r,1)]
        }
        return shuffled;
    };

    useEffect (() => {
        const newDeck = shuffleCards(cards);
        setNewCards(newDeck);
    }, [updateScore])

    return (
        <>
            {cards.map((card) => (
                <Card image={card.image} name={card.name} key={card.name} updateScore={updateScore} />
            ))}  
        </>
    )
}

export default CardGrid;