import "./Dictionary.css";
import Results from "./Results";
import axios from "axios";
import React, { useState } from "react";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defKey);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResp(response) {
    console.log(response.data);
    setResults(response.data);
  }
  function handleImageResponse(response) {
    setPhotos(response.data.photos);
  }
  function search() {
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=a7oe402d391da40bfcfe02337et07b50`;
    axios.get(apiUrl).then(handleResp);

    let picApiKey = "a7oe402d391da40bfcfe02337et07b50";
    let picApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${picApiKey}`;

    axios.get(picApiUrl).then(handleImageResponse);
  }
  function handleSearch(event) {
    event.preventDefault();
    search();
  }
  function handleChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSearch} name="myForm">
            <input type="search" onChange={handleChange} />
          </form>
          <div className="hint">Suggested words: sunset, tomato, road...</div>
        </section>

        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
