const Promise = require('bluebird');


module.exports = function action() {
	return gladys.param.getValue('IP_LMS')
	.then((ip) => 
	gladys.utils.request('http://'+ip+'/status.suffix?p0=play')
	.then((response) => 
	{ 
		console.log(response);

		}).catch((err) => {

			console.log(err);
         
			});
};
