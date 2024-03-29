import React, { Component } from "react";
import "./GetData.css"

class GetData extends Component {
  
  submitHandeler() {

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
        <submit id="sendID">
          הצג מידע
        </submit>
        </form>
      </div>
    );
  }
}

function check() {
  if(this.value.length == 4) {
    alert(this.value);
  }
}

export default GetData;
