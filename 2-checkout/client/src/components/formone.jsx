import React from 'react';
import axios from 'axios';

class FormOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };

    this.updateName = this.updateName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updateFormTwo = this.updateFormTwo.bind(this);
  }

  updateName(event) {
    this.setState({
      name: event.target.value
    });
  }

  updateEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  updatePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  updateFormTwo(e) {
    e.preventDefault();
    axios.post('/checkout', this.state)
    .then((response) => {console.log(response)})
    .catch((err) => {console.log(err)});
    this.props.goToFormTwo();
  }

  render() {
    return (
      <div>
        Form 1: Account Creation
        <form id="f1" onSubmit={(e) => {this.updateFormTwo(e)}}>
          Name: <input onChange={(event) => this.updateName(event)}/> <br/>
          Email: <input onChange={(event) => this.updateEmail(event)}/> <br/>
          Password: <input onChange={(event) => this.updatePassword(event)}/> <br/>
          <input type="submit" value="Next"/>
        </form>
      </div>
    )
  }
}

export default FormOne;