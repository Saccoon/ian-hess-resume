export const onceGetEvents = (email) => new Promise(function(resolve, reject) {
	fetch('http://localhost:8081/events')
  	.then(response => response.json())
  	.then(
  	  data => {return resolve(data)},
  	  error => {return reject(error)}
    )
  	.catch(err => console.error(this.props.url, err.toString()));
});

export const oncePostEvent = (event) => new Promise(function(resolve, reject) {
	fetch('http://localhost:8081/events/'+ event.ID, {
    method: 'PUT',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(event)
  })
  .then(response => response.json())
	.then(
	  data => {return resolve(data)},
	  error => {return reject(error)}
  )
	.catch(err => console.error(this.props.url, err.toString()));
});
