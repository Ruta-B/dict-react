import React from "react";
import "./Synonym.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <ul>
          Synonyms:
          {props.synonyms.map(function (synonym, index) {
            return (
              <li key={index}>
                {""} {synonym}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
