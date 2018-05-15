export const onceGetDevices = (email) => new Promise(function(resolve, reject) {
	fetch('http://localhost:8081/devices')
  	.then(response => response.json())
  	.then(
  	  data => {return resolve(data)},
  	  error => {return reject(error)}
    )
  	.catch(err => console.error(this.props.url, err.toString()));
});

export const onceGetDisconnectedDevices = (email) => new Promise(function(resolve, reject) {
	fetch('http://localhost:8081/disabledDevices')
  	.then(response => response.json())
  	.then(
  	  data => {return resolve(data)},
  	  error => {return reject(error)}
    )
  	.catch(err => console.error(this.props.url, err.toString()));
});

export const oncePostDevice = (device) => new Promise(function(resolve, reject) {
	fetch('http://localhost:8081/devices/'+ device.ID, {
    method: 'PUT',
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
