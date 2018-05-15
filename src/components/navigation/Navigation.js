import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as routes from '../../constants/routes';
import './Navigation.css';
import ButtonLink from '../button/ButtonLink';
import Button from '../button/Button';
import { auth } from '../../firebase';
import Logo from './Logo.png'

const Navigation = ({ authUser }) =>
  <div className="Navigation">
    <figure>
      <Link to={routes.INDEX}>
        <img src={Logo} alt="Logo"></img>
      </Link>
    </figure>
    { authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </div>

const NavigationAuth = () =>
  <ul>
    <li><Button action={auth.doSignOut}>Sign Out</Button></li>
    <li><ButtonLink route={routes.ACCOUNT}>Account</ButtonLink></li>
    <li><ButtonLink route={routes.SITES}>Sites</ButtonLink></li>
    <li><ButtonLink route={routes.INDEX}>Dashboard</ButtonLink></li>
  </ul>

const NavigationNonAuth = () =>
  <ul>
    <li><ButtonLink route={routes.SIGN_UP}>Create Account</ButtonLink></li>
    <li><ButtonLink route={routes.SIGN_IN}>Sign In</ButtonLink></li>
  </ul>

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

export default connect(mapStateToProps)(Navigation);
