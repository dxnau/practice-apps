import React from "react";
import { render } from "react-dom";
import axios from 'axios';
import Checkout from './components/checkout.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>Hello, World!</p>
        <p>
          <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
        </p>
        <Checkout/>
      </div>
    )
  }
}

render(<App/>, document.getElementById("root"));