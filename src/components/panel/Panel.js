import React, { Component } from 'react';
import './Panel.css';
import {node, string} from 'prop-types'

class Panel extends Component {

  static propTypes = {
    /** children inside of the panel **/
    children: node.isRequired,
    /** The title of the panel */
    title: string
  }

  render() {

    const {children, title} = this.props

    return (
      <section className="Panel">
        <header className="Panel-Header">{title}</header>
        <article className="Panel-Content">
          {children}
        </article>
      </section>
    );
  }
};

export default Panel;
