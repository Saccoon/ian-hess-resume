import React, { Component } from 'react';
import './Group.css'
import {string, node} from 'prop-types'

class Group extends Component {

  static propTypes = {
    /** The title to pass into the panel tag */
    title: string.isRequired,
    /** The nodes to pass into the panel tag */
    children: node.isRequired
  }

  render() {

    const {children, title} = this.props

    return (
      <section className="Group">
          <header className="Group-Title">
            <h2>
              {title}
            </h2>
          </header>
          <article className="Group-Content">
            {children}
          </article>
      </section>
    )
  }
}

export default Group;
