import React from 'react';
import PasswordForgetForm from '../../components/login/PasswordForget';

import './Login.css';
import Shade from '../../components/shade/Shade';
import Logo from '../../components/logo/Logo';

const PasswordForgetPage = () =>
  <div data-page="Login">
    <Shade>
      <Shade>
        <article>
          <Logo/>
          <PasswordForgetForm />
        </article>
      </Shade>
    </Shade>
  </div>

export default PasswordForgetPage;