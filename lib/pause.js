const Promise = require('bluebird');

var ip = '192.168.1.28:9000';

module.exports = function stop() {
	gladys.utils.request('http://'+ip+'/status.suffix?p0=pause')
	.then((response) => 
	{ 
		console.log(response);

		}).catch((err) => {

			console.log(err);
         
			});
};
