import React from "react";
import { render } from "react-dom";
import WordList from "./components/wordlist.jsx";
import AddWords from "./components/addwords.jsx";
import Search from "./components/search.jsx";
import WordListEntry from "./components/wordlistentry.jsx";
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: []
    };

    this.addWord = this.addWord.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  addWord(word) {
    axios.post('/dictionary', word)
    .then ((response) => {
      axios.get('/dictionary')
      .then((response) => {
        this.setState({words: response.data})
      })
      .catch((err) => err);
    })
    .catch((err) => err);
  }

  delete(word) {
    axios.delete('/dictionary', word)
    .then ((response) => {
      axios.get('/dictionary')
      .then((response) => {
        this.setState({words: response.data})
      })
      .catch((err) => err);
    })
    .catch((err) => err);
  }

  update(wordToUpdate, newWord) {
    axios.put('/dictionary', wordToUpdate, newWord)
    .then((response) => {
      axios.get('dictionary')
      .then((response) => {
        this.setState({words: response.data})
      })
      .catch((err) => err);
    })
    .catch((err) => err);
  }

  componentDidMount() {
    axios.get('/dictionary')
    .then((response) => {
      this.setState({
        words: response.data
      });
    })
    .catch((err) => {
      return err;
    })
  }

  render() {
    return (
      <div>
        <Search></Search>
        <AddWords addWord={this.addWord}></AddWords>

        <WordList
          words={this.state.words}
          update={this.update}
          delete={this.delete}
        ></WordList>
      </div>
    )
  }
}



render(<App />, document.getElementById('root'));
