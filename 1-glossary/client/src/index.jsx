import React from "react";
import { render } from "react-dom";
import WordList from "./components/wordlist.jsx";
import AddWords from "./components/addwords.jsx";
import Search from "./components/search.jsx";
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: []
    };
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
        <AddWords addWord={this.addWord.bind(this)}></AddWords>
        <WordList words={this.state.words} delete={this.delete.bind(this)}></WordList>
      </div>
    )
  }
}



render(<App />, document.getElementById('root'));
