import "./Dictionary.css";
import axios from "axios";
import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResp(response) {
    console.log(response.data);
  }
  function search(event) {
      event.preventDefault();
      
    
    

    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=a7oe402d391da40bfcfe02337et07b50`;
    axios.get(apiUrl).then(handleResp);
  }
  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search} name="myForm">
              <input type="search" onChange={handleChange} />
             
      </form>
    </div>
  );
}
