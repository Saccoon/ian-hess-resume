import React, { Component } from 'react';
import './ProfilePicture.css';
import {string} from 'prop-types'

class ProfilePicture extends Component {

  static propTypes = {
    /** children inside of the panel **/
    source: string.isRequired,
  }

  render() {

    const {source} = this.props

    return (
      <figure className="ProfilePicture">
        <img alt="Circular-Profile" src={source} />
      </figure>
    );
  }
};

export default ProfilePicture;
