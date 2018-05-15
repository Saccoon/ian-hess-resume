import React, {Component} from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import withAuthorization from '../../app/withAuthorization';
import { siteTable, deviceTable } from '../../database';
import Device from '../../components/device/Device';
import Event from '../../components/event/Event';
import Group from '../../components/group/Group';
import './Sites.css'

class SitesPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    const { onSetSites, authUser } = this.props;

    //get sites from database
    siteTable.onceGetSites(authUser.email).then( data=>
      onSetSites(data)
    ).then(
      this.setState({loading: false})
    )

    //Reload page every few minutes
    this.timer = setInterval(()=> window.location.reload(), 300000)
  }

  renderLoading() {
    return (
      <div data-page="Sites">
        <h1>SITES</h1>
        <div>LOADING...</div>
      </div>
    );
  }

  renderError() {
    return (
      <div data-page="Sites">
        <h1>SITES</h1>
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

  convertIpString = (ipHex) => {
    var result = ""
    var ipArray = ipHex.match(/.{1,2}/g)
  	for(var i = 0; i < ipArray.length; ++i){
  		var ipPart = ipArray[i].split('')
      var IpPartResult = '';
      for(var j = 0; j < ipPart.length; ++j) {
        IpPartResult += parseInt(ipPart[j].charCodeAt(0).toString(2), 2)
      }
      result += IpPartResult
  	}
  	return result;
  }

  renderSites() {

    const { sites } = this.props;
    let time = new Date().getTime();

    return (
      <div data-page="Sites">

          <h1>Sites</h1>
          {sites.map((site, i) =>{
            const updated = new Date(site.LastUpdate).toDateString()
            return (
              <Group key={site + i} title={site.Name}>
                <div>
                  <p>IP Address - {this.convertIpString(site.IpAddress)}</p>
                  <p>Last Update - {updated}</p>
                </div>
                <Group key={'devices' + site + i} title={'Devices'}>
                {
                  site.Devices.map((device, j)=>{
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
                  })
                }
                </Group>
                <Group key={'events' + site + i} title={'Events'}>
                {
                  (site.Events ? site.Events.map((event, j) =>{
                    return <Event key={event.Name + event.Id + j + event.Timestamp} event={event}/>
                  }) : '')
                }
                </Group>
              </Group>
            )
          })}

          <h1>Archived</h1>
          {sites.map((site, i) =>{
            return (
              <Group key={site + i} title={site.Name}>
              {
                site.Devices.map((device, j)=>{
                  if(device.Archive) {
                    return <Device key={device.ID + i} setDeviceReport={this.setDeviceReport} setDeviceRestore={this.setDeviceRestore} setDeviceArchive={this.setDeviceArchive} setDeviceTimeout={this.setDeviceTimeout} device={device}/>
                  }
                  else {
                    return ''
                  }
                })
              }
              </Group>
            )
          })}
      </div>
    );
  }

  render() {
    const { sites } = this.props;

    if (this.state.loading) {
      return this.renderLoading();
    } else if (sites) {
      return this.renderSites();
    } else {
      return this.renderError();
    }
  }
}

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
  sites: state.devicesState.sites
});

const mapDispatchToProps = (dispatch) => ({
  onSetSites: (sites) => dispatch({ type: 'SITES_SET', sites })
});

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps, mapDispatchToProps)
)(SitesPage);
