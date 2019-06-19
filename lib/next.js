const Promise = require('bluebird');


module.exports = function next(player) {
	return gladys.param.getValue('IP_LMS')
	.then((ip) => gladys.utils.request('http://'+ip+'/status?player='+player+'&p0=button&p1=fwd.single')
	.then((response) => 
	{ 
		console.log(response);

		})).catch((err) => {

			console.log(err);
         
			});
};
