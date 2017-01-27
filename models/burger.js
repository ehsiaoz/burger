var orm = require('../config/orm.js');

var burger = {

	all: function(cb) {
		orm.all('burgers', function(res) {
			cb(res);
		});
	},

	create: function (cols, vals, cb) {
		console.log("inside burger create");
		console.log("cols: ", cols);
		console.log("vals: ", vals);
		orm.create('burgers', cols, vals, function (res) {
			cb(res);
		});
	},

	update: function (updatecol, updateval, condition, cb) {
		console.log("inside burger");
		console.log(updatecol, updateval, condition);
		orm.update('burgers', updatecol, updateval, condition, function (res) {
			cb(res);
		});
	}
};

module.exports = burger;
