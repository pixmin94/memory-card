import React from "react";
import logo from "../img/twice-logo.png"

function Header() {
    return (
        <div className="header">
            <img src={logo} id="headerLogo" alt="twice logo"></img>
            <div className="title">Twice Memory Game</div>
        </div>
    );
}
  
export default Header;