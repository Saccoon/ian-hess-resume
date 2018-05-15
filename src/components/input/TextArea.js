import React, { Component } from 'react';
import './Input.css';
import {bool, string, func} from 'prop-types'

class TextArea extends Component {
  
  static propTypes = {
    /** label to be included with text area */
    title: string,
    /** children inside of the text area **/
    children: string.isRequired,
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
      <span className="TextArea">
        {title && (
          <label>{title}</label>
        )}
        <textarea disabled={disabled} value={children} onChange={change}>
        </textarea>
      </span>
    );
  }
};

export default TextArea;