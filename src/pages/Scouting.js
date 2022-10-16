import GetData from "../components/data";
import InputData from "../components/InputData";

import { Link } from "react-router-dom";

import { useState } from "react";
import "./Scouting.css";






function Scouting() {
  const [showResIn, setShowResIn] = useState(false);
  const [showResGet, setShowResGet] = useState(false);
  const [hideRes, setHideRes] = useState(false);
  function onClickIn() {
    setShowResIn(true);
    setHideRes(true);
  };
  function onClickGet() {
    setShowResGet(true);
    setHideRes(true);
  }
function back() {
  setShowResIn(false);
  setShowResGet(false);
  setHideRes(false);
}
  const Btns = () => (
    <center>
      <div>
        <button id="chooseBtn" onClick={onClickGet}>הצג מידע על קבוצה</button>
        <button id="chooseBtn" onClick={onClickIn}>
          הוסף סקאוטינג
        </button>
      </div>
    </center>
  );
  const Back = () => (
    <div>
      <button onClick={back} className="backBtn">חזרה</button>
    </div>
  );

  return (
    <div>
      <center>
        <h1>סקאוטינג</h1>
      </center>

      <div id="render">
        
        {hideRes ? null : <Btns />}
        {showResIn ? <div><Back/><InputData /></div> : null}
        {showResGet ? <div><Back/><GetData/></div> : null}
      </div>
    </div>
  );
}

export default Scouting;
