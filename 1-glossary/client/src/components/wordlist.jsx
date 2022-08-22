import React from "react";
import WordListEntry from "./wordlistentry.jsx";

var WordList = (props) => {
  return(
    <div class="word-list">
      <h1>Dictionary</h1>
      {props.words.map((word) => (
        <WordListEntry
          word={word}
          update={props.update}
          delete={props.delete}
        />
      ))}
    </div>
  )
}

// update={props.update}
// delete={props.delete}
//<button onClick={(event) => {this.updateWord(word)}}>Update</button>
export default WordList;