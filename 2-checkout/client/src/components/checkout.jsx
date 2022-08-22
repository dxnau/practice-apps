import React from 'react';
import FormOne from './formone.jsx';
import FormTwo from './formtwo.jsx';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      formTwo: false,
      formThree: false
    };

    this.clickedButton = this.clickedButton.bind(this);
    this.goToFormTwo = this.goToFormTwo.bind(this);
    this.goToFormThree = this.goToFormThree.bind(this);
  }

  clickedButton() {
    this.setState({clicked: !this.state.clicked});
  }

  goToFormTwo() {
    this.setState({
      clicked: !this.state.clicked,
      formTwo: !this.state.formTwo
    });
  }

  goToFormThree() {
    this.setState({formThree: !this.state.formThree});
  }

  render() {
    return (
      <div>
        <button onClick={() => {this.clickedButton()}}>Checkout</button>
        <div>
          {this.state.clicked ?
          <FormOne goToFormTwo={this.goToFormTwo}/>
          :null}

          {this.state.formTwo ?
          <FormTwo goToFormThree={this.goToFormThree}/>
          :null}
        </div>
      </div>
    )
  }
}

export default Checkout;