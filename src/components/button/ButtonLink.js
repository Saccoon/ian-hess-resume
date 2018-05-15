import React from 'react';
import './Button.css'
import { Link } from 'react-router-dom';

const ButtonLink = ({route, children, solid}) =>
  <div className={solid ? 'Button Solid' : 'Button'}>
    <Link to={route}>{children}</Link>
  </div>

export default ButtonLink;