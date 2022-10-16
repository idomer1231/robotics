import { Component, useRef, useState } from "react";
import React from "react";
import "./InputData.css";
import GetData from "./data";

class InputData extends Component {

  submitHandeler(event) {
    event.preventDefault();

    this.setState((state) => ({
      count: state.count + 1,
    }));

    /*var mysql = require('mysql');
    var con = mysql.createConnection({
      host: "localhost",
      user: "idomer",
      password: "H]8$(6B5@c4~Ih}{"
    });

    con.connect(function(err) {
      if(err) throw err;
      console.log("Connected!");
    })*/
  }
  render() {
    return (
      <div id="inputContainer">
        <form onSubmit={this.submitHandeler}>
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
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default InputData;
