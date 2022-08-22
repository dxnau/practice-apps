import React from 'react';


class FormTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      line1: '',
      line2: '',
      city: '',
      state: '',
      zipcode: '',
      phone: ''
    };
  }

  updateLine1(event) {
    this.setState({
      line1: event.target.value
    });
  }

  updateLine2(event) {
    this.setState({
      line2: event.target.value
    });
  }

  updateCity(event) {
    this.setState({
      city: event.target.value
    });
  }

  updateState(event) {
    this.setState({
      state: event.target.value
    });
  }
  updateZipcode(event) {
    this.setState({
      zipcode: event.target.value
    });
  }
  updatePhone(event) {
    this.setState({
      phone: event.target.value
    });
  }

  render() {
    return (
      <div>
        Shipping Info
        <form id="f2">
          Line 1: <input/> <br/>
          Line 2: <input/> <br/>
          City: <input/> <br/>
          State: <input/> <br/>
          ZipCode: <input/> <br/>
          Phone Number: <input/> <br/>
          <button>Next</button>
        </form>
      </div>
    )
  }
}

export default FormTwo;