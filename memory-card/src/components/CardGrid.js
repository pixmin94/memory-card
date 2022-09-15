import React from "react";
import Card from "./Card";

import sana from '../img/sana.jpeg';
import tzuyu from '../img/tzuyu.jpeg';
import momo from '../img/momo.jpg';

function CardGrid(props) {
    const { updateScore } = props;
    let cards = [
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

    return (
        <>
            {cards.map((card) => (
                <Card image={card.image} name={card.name} key={card.name} updateScore={updateScore} />
            ))}
            
        </>
    )
}

export default CardGrid;