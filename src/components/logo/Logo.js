import React from 'react';

import './Logo.css';
import LogoImage from './Logo.png';

const Logo = () =>
    <figure className="Logo">
        <a href="https://www.usasecurityinc.com/" target="_blank" rel="noopener noreferrer"><img alt="USA-Logo" src={LogoImage} /></a>
    </figure>;

export default Logo;