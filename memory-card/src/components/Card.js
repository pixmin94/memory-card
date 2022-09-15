import React from "react";

function Card(props){
    const { image, name, updateScore } = props
    return (
        <div className="card">
            <button onClick={updateScore}>
            <img className="card-image" src={image} alt={name} />
            <div className="card-name">{name}</div>
            </button>
        </div>       
    )
}

export default Card;