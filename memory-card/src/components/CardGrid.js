import React, { useState, useEffect } from "react";
import Card from "./Card";

import sana from '../img/sana.jpeg';
import tzuyu from '../img/tzuyu.jpeg';
import momo from '../img/momo.jpg';
import mina from '../img/mina.jpeg';
import jihyo from '../img/jihyo.jpeg';
import nayeon from '../img/nayeon.jpeg';
import chaeyoung from '../img/chaeyoung.jpeg';
import dahyun from '../img/dahyun.png';
import jeongyeon from '../img/jeongyeon.jpeg'

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
        },
        {
            image: mina,
            name: 'Mina'
        },
        {
            image: jihyo,
            name: 'Jihyo'
        },
        {
            image: nayeon,
            name: 'Nayeon'
        },
        {
            image: dahyun,
            name: 'Dahyun'
        },
        {
            image: chaeyoung,
            name: 'Chaeyoung'
        },
        {
            image: jeongyeon,
            name: 'Jeongyeon'
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