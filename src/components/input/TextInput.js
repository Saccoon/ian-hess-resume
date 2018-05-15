import React, { Component } from 'react';
import './Input.css';
import {bool, string, func} from 'prop-types'

class TextInput extends Component {
  
  static propTypes = {
    /** label to be included with input */
    title: string,
    /** children inside of the text input **/
    children: string,
    /** Status text to pass in */
    disabled: bool,
    /** Status text to pass in */
    change: func.isRequired,
  }
  
  static defaultProps = {
    disabled: false
  }

  render() {
    
    const {title, children, disabled, change} = this.props
    
    return (
      <span className="TextInput">
        {title && (
          <label>{title}</label>
        )}
        <input disabled={disabled} type="text" value={children} onChange={change} />
      </span>
    );
  }
};

export default TextInput;