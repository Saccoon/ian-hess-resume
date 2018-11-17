import React, { Component } from 'react';
import './Print.css';
import Image from './Print.png'
import {bool, node} from 'prop-types'

class Print extends Component {

  static propTypes = {
    /** children to show upon clicking print button **/
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
    this.setState(
      prevState => ({
        collapsed: !prevState.collapsed
      }),() => {
        window.print()
      }
    )

    window.onbeforeprint = () => {
      this.setState(
        prevState => ({
          collapsed: !prevState.collapsed
        })
      )
    }
  }

  render() {
    const {children} = this.props

    return (
      <section className="Print">
        {!this.state.collapsed && (
          <article className="PrintContent">
            <div className="PrintContainer">
              {children}
            </div>
          </article>
        )}
        {this.state.collapsed && (
          <figure className="PrintImage">
            <img onClick={this.handleClick} alt="Circular-Profile" src={Image} />
          </figure>
        )}
      </section>
    );
  }
};

export default Print;
