const Promise = require('bluebird');


module.exports = function action(player, actionType) {
	return gladys.param.getValue('IP_LMS')
	.then((ip) => gladys.utils.request('http://'+ip+'/status.suffix?p0='+actionType+'&player='+player)
	.then((response) => 
	{ 
		console.log(response);

		})).catch((err) => {

			console.log(err);
         
			});
};
