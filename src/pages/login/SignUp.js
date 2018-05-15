import React from 'react';
import { withRouter} from 'react-router-dom';
import SignUpForm from '../../components/login/SignUp';

import './Login.css';
import Shade from '../../components/shade/Shade';
import Logo from '../../components/logo/Logo';

const SignUpPage = ({ history }) => 
  <div data-page="Login">
    <Shade>
      <Shade>
        <article>
          <Logo/>
          <SignUpForm history={history} />
        </article>
      </Shade>
    </Shade>
  </div>

export default withRouter(SignUpPage);
