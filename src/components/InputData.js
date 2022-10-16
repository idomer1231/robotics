import { useRef } from "react";
import "./InputData.css";

function InputData() {

  function submitHandeler(event) {
    event.preventDefault();
    var mysql = require('mysql');
    var con = mysql.createConnection({
      host: "localhost",
      user: "idomer",
      password: "H]8$(6B5@c4~Ih}{"
    });

    con.connect(function(err) {
      if(err) throw err;
      console.log("Connected!");
    })
  }

  return (
    <div id="inputContainer">
      <form onSubmit={submitHandeler}>
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
        <input type="submit" value="בחר קבוצה" />
      </form>
    </div>
  );
}

export default InputData;
