export const onceGetDevices = (email) => new Promise(function(resolve, reject) {
    const newEmail = email.replace(".", "[DOT]");
	fetch('https://accmonitoring.com:1210/Okta/DeviceInfo/' + newEmail)//'http://localhost:8081/devices'
    	.then(response => response.json())
    	.then(
    	  data => {return resolve(data)},
    	  error => {return reject(error)}
        )
    	.catch(err => console.error(this.props.url, err.toString()));
});

export const onceGetEvents = (email) => new Promise(function(resolve, reject) {
    const newEmail = email.replace(".", "[DOT]");
	fetch('https://accmonitoring.com:1210/Okta/EventInfo/' + newEmail)//'http://localhost:8081/devices'
    	.then(response => response.json())
    	.then(
    	  data => {return resolve(data)},
    	  error => {return reject(error)}
        )
    	.catch(err => console.error(this.props.url, err.toString()));
});

export const onceGetDevicesBySite = (email) => new Promise(function(resolve, reject) {
    const newEmail = email.replace(".", "[DOT]");
	fetch('https://accmonitoring.com:1210/Okta/DeviceInfo/Sites/' + newEmail)//'http://localhost:8081/devices'
    	.then(response => response.json())
    	.then(
    	  data => {return resolve(data)},
    	  error => {return reject(error)}
        )
    	.catch(err => console.error(this.props.url, err.toString()));
});

export const oncePostDevice = (device) => new Promise(function(resolve, reject) {
	fetch('https://accmonitoring.com:1210/Okta/DeviceInfo/Update', {//'http://localhost:8081/devices/'+ device.ID
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(device)
    })
    .then(response => response.json())
	.then(
	  data => {return resolve(data)},
	  error => {return reject(error)}
    )
	.catch(err => console.error(this.props.url, err.toString()));
});
