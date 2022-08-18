import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {str: ''};
  }

  render() {
    return (
      <div>
        <h1>Search Dictionary</h1>
        Search for a word:<input></input>
        <button>Search</button>
      </div>
    )
  }
}

export default Search;