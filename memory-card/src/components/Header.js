import React from "react";
import logo from "../img/twice-logo.png"
// import Game from "./Game";

function Header(props) {
    const { score, highScore } = props

    return (
        <div className="header">
            <img src={logo} id="headerLogo" alt="twice logo"></img>
            <h1 className="title">Twice Memory Game</h1>
            <p>Score: {score}</p>
            <p>High Score: {highScore} </p>
        </div>
    );
}
  
export default Header;