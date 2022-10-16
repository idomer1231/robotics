import { Component, useRef, useState } from "react";
import React from "react";
import "./InputData.css";
import GetData from "./data";
//import "mysql";

class InputData extends Component {

  submitHandeler(event) {
    event.preventDefault();

    this.setState((state) => ({
      count: state.count + 1,
    }));

    //const mysql = require('mysql');
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
          <input type="submit" value="בחירת קבוצה" id="sendIDIn" className="inputS"/>
        </form>
      </div>
    );
  }
}

export default InputData;
