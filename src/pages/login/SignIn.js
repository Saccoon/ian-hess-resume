import React from 'react';
import { withRouter } from 'react-router-dom';

import SignInForm  from '../../components/login/SignIn';

import './Login.css';
import Shade from '../../components/shade/Shade';
import Logo from '../../components/logo/Logo';

const SignInPage = ({ history }) =>
  <div data-page="Login">
    <Shade>
      <Shade>
        <article>
          <Logo/>
          <SignInForm history={history} />
        </article>
      </Shade>
    </Shade>
  </div>

export default withRouter(SignInPage);