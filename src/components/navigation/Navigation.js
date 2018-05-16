import React from 'react';

import * as routes from '../../constants/routes';
import './Navigation.css';
import ButtonLink from '../button/ButtonLink';

const Navigation = () =>
  <div className="Navigation">
    <div className="Title">
      Ian David James Hess
    </div>
    <ul>
      <li><ButtonLink route={routes.WORK}>Work</ButtonLink></li>
      <li><ButtonLink route={routes.INDEX}>Profile</ButtonLink></li>
    </ul>
  </div>

export default Navigation;
