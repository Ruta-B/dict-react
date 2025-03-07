import React from "react";
import Synonyms from "./Synonyms";
import "./Meanings.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <strong>Definition:</strong>
      <p>{props.meaning.definition}</p>
      <strong>Example:</strong>
      <p>{props.meaning.example}</p>

      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
