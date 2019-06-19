const Promise = require('bluebird');


module.exports = function flow(player) {
	return gladys.param.getValue('IP_LMS')
	.then((ip) => gladys.utils.request('http://'+ip+'/status.suffix?p0=playlist&p1=play&p2=deezer://flow.dzr&p3=Deezer%20Flow&player='+player)
	.then((response) => 
	{ 
		console.log(response);

		})).catch((err) => {

			console.log(err);
         
			});
};
