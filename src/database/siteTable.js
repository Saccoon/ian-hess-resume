export const onceGetSites = (email) => new Promise(function(resolve, reject) {
	fetch('http://localhost:8081/sites')
  	.then(response => response.json())
  	.then(
  	  data => {return resolve(data)},
  	  error => {return reject(error)}
    )
  	.catch(err => console.error(this.props.url, err.toString()));
});
