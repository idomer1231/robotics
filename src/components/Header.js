import React from "react";
import { Link } from "react-router-dom";

//style
import "./Header.css";
var isNeat = true;

function Header() {
  return (
    <div id="container">
      <div id="buttons-container">
        <Link to="/" id="homeHeader" className="headerBtn">
          בית
        </Link>
        <Link to="/scouting" id="scoutingHeader" className="headerBtn">
          סקאוטינט
        </Link>
        <Link to="/chat" id="chatHeader" className="headerBtn">
          צ'אט
        </Link>
      </div>
      <button id="changeBackground" onClick={change}>החלף רקע</button>
    </div>
  );
}

function change() {
    if(isNeat) {
        document.body.style = "background-image: url('./pictures/background.jpg');";
        isNeat = false;
    }
    else {
        isNeat = true;
       document.body.style = "background-color: white;";
    }
}

export default Header;
