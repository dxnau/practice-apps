import React from "react";
import Update from './update.jsx';
import Delete from './delete.jsx';

var WordList = (props) => {
  return (
    <div>
      <h1>Dictionary</h1>
      {props.words.map((word) => {
        return (
        <div class="wordlist">
          <div id="word-name">
            {word.word}
          </div>

          <div id="word-definition">
          {word.definition}
          </div>

          <Update></Update>
          <Delete
            word={word}
            delete={props.delete}>
          </Delete>
        </div>
        )
      })}
    </div>
  )
}

export default WordList;