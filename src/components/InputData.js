import { Component, useRef, useState } from "react";
import React from "react";
import "./InputData.css";
import GetData from "./data";


class InputData extends Component {
  submitHandeler(event) {
    event.preventDefault();

    /*const mysql = require("mysql");
    const con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "Freshfood1!",
      database: "teams"
    });

    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    });

    con.end();*/

    


  }
  render() {
    return (
      <div id="inputContainer">
        <form onSubmit={this.submitHandeler} id="formCont">
          <input
            type="text"
            id="teamNumber"
            placeholder="מספר הקבוצה"
            className="inputS"
            maxLength={4}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
          />
          <input
            type="submit"
            value="בחירת קבוצה"
            id="sendIDIn"
            className="inputS"
          />
        </form>
      </div>
    );
  }
}

export default InputData;
