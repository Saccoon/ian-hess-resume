import React from 'react';
import './Button.css'

const Button = ({action, disabled, children, solid}) =>
  <button
    className={solid ? 'Button Solid' : 'Button'}
    type="button"
    disabled={disabled}
    onClick={action}
  >
    {children}
  </button>

export default Button;