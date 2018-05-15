import React, { Component } from 'react';

import './Email.css';
import ButtonSubmit from '../button/ButtonSubmit.js';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  error: null
};

class SendEmail extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    console.log('send email' + event)

    event.preventDefault();
  }

  render() {
    const {
      email,
      error
    } = this.state;

    const isInvalid =
      email === '';

    return (
      <form className="Email" onSubmit={this.onSubmit}>
        <input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <ButtonSubmit solid disabled={isInvalid}>
          Send
        </ButtonSubmit>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default SendEmail;