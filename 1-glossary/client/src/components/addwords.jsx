import React from 'react';

class AddWords extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      definition: ''
    };

    this.createWord = this.createWord.bind(this);
    this.updateDefinition = this.updateDefinition.bind(this);
    this.submit = this.submit.bind(this);
  }

  createWord(event) {
    this.setState({
      word: event.target.value
    });
  }

  updateDefinition(event) {
    this.setState({
      definition: event.target.value
    });
  }

  submit() {
    this.props.addWord(this.state);
  }

  render() {
    return (
      <div>
        <h1>Add to Dictionary</h1>
        Add a word:<input onChange={this.createWord}></input>
        <br></br>
        Definition:<input onChange={this.updateDefinition}></input>
        <br></br>
        <button onClick={this.submit}>Submit word</button>
      </div>
    )
  }
}
export default AddWords;