import React from 'react';

class AddWords extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      definition: ''
    };

    this.updateWord = this.updateWord.bind(this);
    this.updateDefinition = this.updateDefinition.bind(this);
    this.submit = this.submit.bind(this);
  }

  updateWord(event) {
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
        Add a word:<input onChange={this.updateWord}></input>
        <br></br>
        Definition:<input onChange={this.updateDefinition}></input>
        <br></br>
        <button onClick={this.submit}>Submit word</button>
      </div>
    )
  }
}
export default AddWords;