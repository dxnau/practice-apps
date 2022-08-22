import React from 'react';

class WordListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      name: '',
      definition: ''
    }


    this.deleteWord = this.deleteWord.bind(this);
    this.showForm = this.showForm.bind(this);
    this.updateWord = this.updateWord.bind(this);
    this.updateWordDef = this.updateWordDef.bind(this);
  }

  deleteWord(word) {
    this.props.delete(word)
  }

  showForm(e) {
    this.setState({editing: !this.state.editing});
  }

  updateWord(e) {
    this.setState({name: e.target.value})
  }

  updateWordDef(e) {
    this.setState({definition: e.target.value})
  }

  update() {
    let wordName = this.state.name;
    let newDefinition = this.state.definition;
    let updatedWord = {word: wordName, definition: newDefinition}
    this.props.update(this.props.word, updateWord);
  }

  render() {
    return (
    <div class="word-list-entry">
      <div id="word-name">
        {this.props.word.word}
      </div>

      <div id="word-definition">
        {this.props.word.definition}
      </div>

      <button onClick={(e) => {this.showForm(e)}}>Update</button>
      <button onClick={() => {this.deleteWord(this.props.word)}}>Delete</button>

      {this.state.editing ? (
        <form id="update-form">
          Update word name: <input onChange={this.updateWord}></input>
          <br></br>
          Update word definition: <input onChange={this.updateWordDef}></input>
          <br></br>
          <button onClick={() => {this.update()}}>Update!</button>
        </form>
      ) :null}
    </div>
    )
  }
}

export default WordListEntry;