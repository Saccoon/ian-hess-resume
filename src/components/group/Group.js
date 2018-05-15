import React, { Component } from 'react';
import './Group.css'
import {string, node, bool} from 'prop-types'

class Group extends Component {

  static propTypes = {
    /** The title to pass into the panel tag */
    title: string.isRequired,
    /** The nodes to pass into the panel tag */
    children: node.isRequired,
    /** The current open or closed state of the Accordion */
    collapsed: bool
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

    const {children, title} = this.props

    return (
      <section className="Group">
          <header className="Group-Title" onClick={this.handleClick}>
            <h2>
              {title}
              {!this.state.collapsed && (
                <div className="Group-Expand-Icon">-</div>
              )}
              {this.state.collapsed && (
                <div className="Group-Expand-Icon">+</div>
              )}
            </h2>
          </header>
          {!this.state.collapsed && (
            <article className="Group-Content">
              {children}
            </article>
          )}
      </section>
    )
  }
}

export default Group;
