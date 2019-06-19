const Promise = require('bluebird');


module.exports = function setVolume(player, sound) {
	return gladys.param.getValue('IP_LMS')
	.then((ip) => gladys.utils.request('http://'+ip+'/?player='+player+'&p0=mixer&p1=volume&p2='+sound)
	.then((response) => 
	{ 
		console.log(response);

		})).catch((err) => {

			console.log(err);
         
			});
};
