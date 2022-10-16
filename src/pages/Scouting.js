import GetData from "../components/data";
import InputData from "../components/InputData";

import { Link } from "react-router-dom";

import {userState} from 'react';
import "./Scouting.css";

function Scouting() {
  return (
    <div>
      <center><h1>סקאוטינג</h1></center>
      <div id="buttons">
        <Link to="/teamData" id="chooseBtn">הצג מידע על קבוצה</Link>
        <Link to="/addData" element={<InputData />} id="chooseBtn">הוסף סקאוטינג</Link>
      </div>
    </div>
  );
}

export default Scouting;