module.exports = function(sails) {

	var action = require('./lib/action.js');
	var flow = require('./lib/flow.js');
	var next = require('./lib/next.js');
	var previous = require('./lib/previous.js');
	var setVolume = require('./lib/setVolume.js');
	
	return {
		action: action,
		flow: flow,
		next: next,
		previous: previous,
		volume: setVolume
	};
};
