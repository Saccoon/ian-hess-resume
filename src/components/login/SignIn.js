import React, { Component } from 'react';

import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import './Login.css';
import ButtonSubmit from '../button/ButtonSubmit.js';
import PasswordForgetLink  from './PasswordForgetLink';
import SignUpLink  from '../../components/login/SignUpLink';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.INDEX);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <form className="Login" onSubmit={this.onSubmit}>
        <input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <div>
          <PasswordForgetLink />
          <SignUpLink />
        </div>
        <ButtonSubmit solid disabled={isInvalid}>
          Sign In
        </ButtonSubmit>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default SignInForm;