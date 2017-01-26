var orm = require('../config/orm.js');
var connection = require('../config/connection.js');

var burger = {

	all: function(cb) {
		var queryString = 'SELECT * FROM burgers;';
		connection.query(queryString, function(err, result) {
			if (err); throw err;
			cb(result);
		});
	}

	// all: function(cb) {
	// 	orm.all(function(res) {
	// 		cb(res);
	// 	});
	// },

	// create: function (cols, vals, cb) {
	// 	orm.create('burgers', cols, vals, function (res) {
	// 		cb(res);
	// 	});
	// },

	// update: function (updatecol, updateval, condition, cb) {
	// 	orm.update('burgers', updatecol, updateval, condition, function (res) {
	// 		cb(res);
	// 	});
	// }
};

module.exports = burger;

