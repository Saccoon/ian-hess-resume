import React, { Component } from 'react';
import './Popup.css';
import Button from '../button/Button';
import Panel from '../panel/Panel';
import {bool, node, func} from 'prop-types';

class Popup extends Component {
  
  static propTypes = {
    /** children inside of the popup **/
    children: node.isRequired,
    /** The current open or closed state of the Popup */
    closed: bool,
    /** Method to change closed bool to show and hide popup */
    close: func.isRequired,
  }
  
  static defaultProps = {
    closed: true
  }

  render() {
    
    const {children, closed, close} = this.props
    
    if(closed) {
      return null;
    }
    
    return (
      <section className="Popup">
        <Panel>
            <article className="Popup-Content">
              {children}
            </article>
            <footer className="Popup-Header">
                <Button action={close}><i className="fa fa-times" aria-hidden="true"></i> CANCEL</Button>
            </footer>
        </Panel>
      </section>
    );
  }
};

export default Popup;