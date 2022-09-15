import React from "react";

function Card(props){
    const { image, name, updateScore } = props
    return (
        <div className="card">
            <button onClick={updateScore.bind(this, name)}>
            <img className="card-image" src={image} alt={name} />
            <h1 className="card-name">{name}</h1>
            </button>
        </div>  
    )
}

export default Card;