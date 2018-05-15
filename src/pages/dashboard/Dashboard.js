import React, {Component} from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import withAuthorization from '../../app/withAuthorization';
import { deviceTable, eventTable } from '../../database';
import Device from '../../components/device/Device';
import Event from '../../components/event/Event';
import Group from '../../components/group/Group';
import './Dashboard.css'

class DashboardPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    const { onSetDevices, onSetEvents, authUser } = this.props;

    //get devices from database
    deviceTable.onceGetDisconnectedDevices(authUser.email).then( data=>
      onSetDevices(data)
    ).then(
      //get events from database
      eventTable.onceGetEvents(authUser.email).then( data=>
        onSetEvents(data)
      ).then(
        this.setState({loading: false})
      )
    )

    //Reload page every few minutes
    this.timer = setInterval(()=> window.location.reload(), 300000)
  }

  renderLoading() {
    return (
      <div data-page="Dashboard">
        <h1>DASHBOARD</h1>
        <div>LOADING...</div>
      </div>
    );
  }

  renderError() {
    return (
      <div data-page="Dashboard">
        <h1>DASHBOARD</h1>
        <div>Im sorry! Please try again.</div>
      </div>
    );
  }

  // make the function async
  setDeviceTimeout = id => async timeout => {
    const {onSetDevices, devices} = this.props;

    // make a list of promises, not of devices
    // note: mapping a value via an async function will create promises
    const newDeviceListPromises = devices.map(async device => {
      if (device.ID === id) {
        const newDevice = {
          ...device,
          timeout: timeout
        };
        return await deviceTable.oncePostDevice(newDevice);
      }
      return device;
    })

    // wait for all promises to finish and what they return will be the devices
    const newDeviceList = await Promise.all(newDeviceListPromises);

    //wait for redux to finish setting state before reloading
    await Promise.resolve(onSetDevices(newDeviceList));
  }

  // make the function async
  setDeviceArchive = id => async () => {
    const {onSetDevices, devices} = this.props;

    // make a list of promises, not of devices
    // note: mapping a value via an async function will create promises
    const newDeviceListPromises = devices.map(async device => {
      if (device.ID === id) {
        const newDevice = {
          ...device,
          archive: true
        };
        return await deviceTable.oncePostDevice(newDevice);
      }
      return device;
    })
    // wait for all promises to finish and what they return will be the devices
    const newDeviceList = await Promise.all(newDeviceListPromises);
    //wait for redux to finish setting state before reloading
    await Promise.resolve(onSetDevices(newDeviceList));
  }

  // make the function async
  setDeviceReport = id => async (reportState) => {
    const {onSetDevices, devices} = this.props;

    // make a list of promises, not of devices
    // note: mapping a value via an async function will create promises
    const newDeviceListPromises = devices.map(async device => {
      if (device.ID === id) {
        const newDevice = {
          ...device,
          report: reportState
        };
        return await deviceTable.oncePostDevice(newDevice);
      }
      return device;
    })

    // wait for all promises to finish and what they return will be the devices
    const newDeviceList = await Promise.all(newDeviceListPromises);

    //wait for redux to finish setting state before reloading
    await Promise.resolve(onSetDevices(newDeviceList));
  }

  // make the function async
  setDeviceRestore = id => async () => {
    const {onSetDevices, devices} = this.props;

    // make a list of promises, not of devices
    // note: mapping a value via an async function will create promises
    const newDeviceListPromises = devices.map(async device => {
      if (device.ID === id) {
        const newDevice = {
          ...device,
          archive: false
        };
        return await deviceTable.oncePostDevice(newDevice);
      }
      return device;
    })

    // wait for all promises to finish and what they return will be the devices
    const newDeviceList = await Promise.all(newDeviceListPromises);

    //wait for redux to finish setting state before reloading
    await Promise.resolve(onSetDevices(newDeviceList));
  }

  renderDashboard() {

    const { devices, events } = this.props;
    let time = new Date().getTime();

    return (
      <div data-page="Dashboard">
        <Group title="Events" collapsed={false}>
          {
            (events ? events.map((event, i) =>{
              return <Event key={event.Id + i} event={event}/>
            }) : '')
          }
        </Group>
        <Group title="Devices" collapsed={false}>
          {devices.map((device, i) =>{
            if(device.Archive) {
              return '';
            }
            else {
              if(device.Timeout) {
                if(device.Timeout > time) {
                  return '';
                }
                return <Device key={device.ID + i} setDeviceReport={this.setDeviceReport} setDeviceRestore={this.setDeviceRestore} setDeviceArchive={this.setDeviceArchive} setDeviceTimeout={this.setDeviceTimeout} device={device}/>
              }
              else {
                return(
                  <Device key={device.ID + i} setDeviceReport={this.setDeviceReport} setDeviceRestore={this.setDeviceRestore} setDeviceArchive={this.setDeviceArchive} setDeviceTimeout={this.setDeviceTimeout} device={device}/>
                )
              }
            }
          })}
        </Group>
        <Group title="Archived">
          {devices.map((device, i) =>{
            if(device.Archive) {
              return <Device key={device.ID + i} setDeviceReport={this.setDeviceReport} setDeviceRestore={this.setDeviceRestore} setDeviceArchive={this.setDeviceArchive} setDeviceTimeout={this.setDeviceTimeout} device={device}/>
            }
            else {
              return ''
            }
          })}
        </Group>
      </div>
    );
  }

  render() {
    const { devices } = this.props;

    if (this.state.loading) {
      return this.renderLoading();
    } else if (devices) {
      return this.renderDashboard();
    } else {
      return this.renderError();
    }
  }
}

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
  devices: state.devicesState.devices,
  events: state.eventsState.events
});

const mapDispatchToProps = (dispatch) => ({
  onSetDevices: (devices) => dispatch({ type: 'DEVICES_SET', devices }),
  onSetEvents: (events) => dispatch({ type: 'EVENTS_SET', events }),
});

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps, mapDispatchToProps)
)(DashboardPage);
