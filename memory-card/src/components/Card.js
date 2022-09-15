import React from "react";

function Card(props){
    const { image, name, updateScore } = props
    return (
        <div className="card-container">
            <div className="card">
                <button onClick={updateScore}>
                <img className="card-image" src={image} alt={name} />
                <h1 className="card-name">{name}</h1>
                </button>
            </div>  
        </div>     
    )
}

export default Card;