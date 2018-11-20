import React, { Component } from 'react'
import Image from './downloadbutton.svg'
import URL from './resume.pdf'
import './PrintButton.css';

class DownloadButton extends Component {

  render() {

    return (
      <a href={URL}>
        <figure className="PrintImage">
            <img alt="Circular-Profile" src={Image} />
        </figure>
      </a>
    )
  }
}

export default DownloadButton
