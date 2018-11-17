import React, { Component } from 'react'
import './PrintButton.css'
import Image from './Print.png'

class PrintButton extends Component {

  handleClick = e => {
    e.preventDefault()
    window.print()
  }

  render() {

    return (
        <figure className="PrintImage">
            <img onClick={this.handleClick} alt="Circular-Profile" src={Image} />
        </figure>
    )
  }
}

export default PrintButton
