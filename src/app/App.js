import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

//components
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';

//pages
import Index from '../pages/dashboard/Dashboard';
import Sites from '../pages/sites/Sites';
import SignUpPage from '../pages/login/SignUp';
import SignInPage from '../pages/login/SignIn';
import PasswordForgetPage from '../pages/login/PasswordForget';
import AccountPage from '../pages/account/Account';

import * as routes from '../constants/routes';
import withAuthentication from './withAuthentication';

const App = () =>
  <Router>
    <div>
      <Navigation />
      <Route exact path={routes.INDEX} component={() => <Index />} />
      <Route exact path={routes.SITES} component={() => <Sites />} />
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />

      <Footer />
    </div>
  </Router>

export default withAuthentication(App);
