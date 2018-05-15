import React from 'react';
import './Button.css'

const ButtonSubmit = ({action, disabled, children, solid}) =>
  <button
    className={solid ? 'Button Solid' : 'Button'}
    type="submit"
    disabled={disabled}
    onClick={action}
  >
    {children}
  </button>

export default ButtonSubmit;