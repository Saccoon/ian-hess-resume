import React, { Component } from 'react';
import './Event.css';
import {object} from 'prop-types'
import Accordion from '../accordion/Accordion';

class Event extends Component {

  static propTypes = {
    /** event object to pass into device component **/
    event: object.isRequired,
  }

  render() {

    const {event} = this.props
    const timestamp = new Date(event.Timestamp).toDateString()

    return (
      <div className="Event">
        <Accordion title={event.Name} status={timestamp}>
           <h3>ID/SITEID: {event.Id} - {event.SiteId}</h3>
           <p>Event Description: {event.Message}</p>
           <h3>Timestamp: {timestamp}</h3>
        </Accordion>
      </div>
    );
  }
};

export default Event;
