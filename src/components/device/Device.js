import React, { Component } from 'react';
import './Device.css';
import {object, func} from 'prop-types'
import Accordion from '../accordion/Accordion';
import Button from '../button/Button';
import Popup from '../popup/Popup';
import TextInput from '../input/TextInput'
import ButtonSubmit from '../button/ButtonSubmit'

class Device extends Component {

  static propTypes = {
    /** device object to pass into device component **/
    device: object.isRequired,
    /** Updates the timeout for the device on the device table */
    setDeviceTimeout: func.isRequired,
    /** Updates the archive status for the device on the device table */
    setDeviceArchive: func.isRequired,
    /** Updates the archive status for the device on the device table */
    setDeviceRestore: func.isRequired,
    /** Updates the reported status for the device on the device table */
    setDeviceReport: func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      reportPopupClosed: true,
      clearPopupClosed: true,
      archivePopupClosed: true,
      restorePopupClosed: true,
      clearTimeout: '',
      connected: true,
      old: false
    };
    this.clearAlert = this.clearAlert.bind(this);
  }

  componentDidMount() {
    /** detect if latest update was within 5 minutes or less */
    let newDateObj = new Date().getTime();
    var lastUpdate = this.props.device.Updated;
    lastUpdate = new Date(lastUpdate).getTime();
    //detects if the device hasn't been updated in a month
    if( newDateObj - lastUpdate >= (30*24*60*60*1000) ) {
      this.props.setDeviceArchive();
      this.setState({
        old: true
      });
    }
    //Alert has been in alert status for at least 5 minutes
    if(!this.props.device.Connected){
      if(newDateObj - lastUpdate >= (5 * 60 * 1000) ) {
        this.setState({
          connected: false
        });
      }
    }
	}

  /** report alert */
  toggleReportPopup = () => {
    this.setState(prevState => ({
      reportPopupClosed: !prevState.reportPopupClosed
    }))
  }

  reportAlert = async () => {
    const {device} = this.props
    await Promise.resolve(this.props.setDeviceReport(!device.Report));
  }

  /** clear alert */
  toggleClearPopup = () => {
    this.setState(prevState => ({
      clearPopupClosed: !prevState.clearPopupClosed
    }))
  }

  clearAlertSetTime = device => e => {
    e.preventDefault()
    let newDateObj = new Date();
    newDateObj.setTime(newDateObj.getTime() + (e.target.value * 60 * 1000 * 60));
    this.setState({clearTimeout: newDateObj.getTime()});
  }

  clearAlert = async () => {
    await Promise.resolve(this.props.setDeviceTimeout(this.state.clearTimeout));
  }

  /** archive alert */
  toggleArchivePopup = () => {
    this.setState(prevState => ({
      archivePopupClosed: !prevState.archivePopupClosed
    }))
  }

  /** restore alert */
  toggleRestorePopup = () => {
    this.setState(prevState => ({
      restorePopupClosed: !prevState.restorePopupClosed
    }))
  }

  render() {

    const {device} = this.props
    const updated = new Date(device.Updated).toDateString()

    //detects if the device hasn't been updated in a month, removed in favor of archive
    // if(this.state.old) {
    //   return '';
    // }

    return (
      <div className="Device">
          <Accordion title={device.Site + ' - ' + device.Name} status={(this.state.connected ? '' : 'DISCONNECTED!')}>
             <h3>Connected: {(this.state.connected ? 'TRUE' : 'FALSE')}</h3>
             <h3>
              Last Update: {updated}</h3>
             <p>{device.Description}</p>
             {(device.Archive && this.state.old ? <p><i className="fas fa-exclamation-triangle"></i> EXPIRED</p> :
             ''
             )}
             {(device.Report ? <p><i className="fas fa-exclamation-triangle"></i> REPORTED</p> :
             ''
             )}
             {(device.LatestImageBytes ? <img alt="Device Latest Camera View" src={`data:image/png;base64,${device.LatestImageBytes}`} /> :
               ''
             )}
             <div className="Button-Container">
               {(this.state.connected || device.Archive || device.Report ? '' :
               <Button action={this.toggleReportPopup}><i className="fa fa-exclamation" aria-hidden="true"></i> REPORT</Button>
               )}
               {(!this.state.connected && !device.Archive && device.Report ?
               <Button action={this.toggleReportPopup}><i className="fa fa-exclamation" aria-hidden="true"></i> RETRACT REPORT</Button> :
               ''
               )}
               {(this.state.connected || device.Archive ? '' :
               <Button action={this.toggleClearPopup}><i className="fa fa-times" aria-hidden="true"></i> CLEAR</Button>
               )}
               {(this.state.connected || device.Archive ? '' :
               <Button action={this.toggleArchivePopup}><i className="fa fa-archive" aria-hidden="true"></i> ARCHIVE</Button>
               )}
               {(!device.Archive || this.state.old ? '' :
               <Button action={this.toggleRestorePopup}><i className="fa fa-inbox" aria-hidden="true"></i> RESTORE</Button>
               )}
             </div>
          </Accordion>
          {(device.Archive ?
            (
            <Popup close={this.toggleRestorePopup} closed={this.state.restorePopupClosed}>
                <form onSubmit={()=>this.props.setDeviceRestore(device.ID)}>
                  <h3>Restore Alert?</h3>
                  <ButtonSubmit>YES</ButtonSubmit>
                </form>
            </Popup>
            )
            :
            (<span>
            <Popup close={this.toggleReportPopup} closed={this.state.reportPopupClosed}>
              <form onSubmit={()=>this.reportAlert(device.ID)}>
                 {(device.Report ? <h3>Retract Report?</h3> :
                 <h3>Report Alert?</h3>
                 )}
                <ButtonSubmit>YES</ButtonSubmit>
              </form>
            </Popup>
            <Popup close={this.toggleClearPopup} closed={this.state.clearPopupClosed}>
                <form onSubmit={()=>this.clearAlert(device.ID)}>
                  <h3>Clear Alert?</h3>
                  <TextInput title="How Long? (Hours)" change={this.clearAlertSetTime(device)}></TextInput>
                  <ButtonSubmit>SUBMIT</ButtonSubmit>
                </form>
            </Popup>
            <Popup close={this.toggleArchivePopup} closed={this.state.archivePopupClosed}>
                <form onSubmit={()=>this.props.setDeviceArchive(device.ID)}>
                  <h3>Archive Alert?</h3>
                  <ButtonSubmit>YES</ButtonSubmit>
                </form>
            </Popup>
            </span>)
          )}
      </div>
    );
  }
};

export default Device;
