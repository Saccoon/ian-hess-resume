import React, { Component } from 'react';
import './Accordion.css';
import {bool, node, string} from 'prop-types'

class Accordion extends Component {

  static propTypes = {
    /** children inside of the accordion **/
    children: node.isRequired,
    /** The current open or closed state of the Accordion */
    collapsed: bool,
    /** The title of the accordion */
    title: string,
    /** Status text to pass in */
    status: string
  }

  static defaultProps = {
    collapsed: true
  }

  constructor(props) {
    super(props)

    this.state = {
      collapsed: props.collapsed
    }
  }

  handleClick = e => {
    e.preventDefault()
    this.setState(prevState => ({
      collapsed: !prevState.collapsed
    }))
  }

  render() {

    const {children, title, status} = this.props

    return (
      <section className={"Accordion " + (status ? 'Accordion-Status' : '')}>
        <header className="Accordion-Header" onClick={this.handleClick}>
          <div className="Accordion-Title">{title}</div>
          {status && (
            <div className="Accordion-Status">{status}</div>
          )}
          {!this.state.collapsed && (
            <div className="Accordion-Expand-Icon">-</div>
          )}
          {this.state.collapsed && (
            <div className="Accordion-Expand-Icon">+</div>
          )}
        </header>
        {!this.state.collapsed && (
          <article className="Accordion-Content">
            {children}
          </article>
        )}
      </section>
    );
  }
};

export default Accordion;
