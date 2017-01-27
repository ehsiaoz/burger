var connection = require('./connection.js');

var orm = {

	all: function(tableInput, cb) {
		var queryString = 'SELECT * FROM ' + tableInput + ';';
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},

	create: function (tableInput, cols, vals, cb) {
		console.log("inside orm create");
		console.log("cols: ", cols);
		console.log("vals: ", vals);
		var queryString = 'INSERT INTO ' + tableInput;

		queryString = queryString + ' (';
		queryString = queryString + cols.toString();
		queryString = queryString + ') ';
		queryString = queryString + 'VALUES (';
		queryString = queryString + vals.toString();
		queryString = queryString + ')'

		console.log(queryString);
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			console.log("mysql create success result: ", result);
			cb(result);
		});
	},

	update: function (tableInput, updatecol, updateval, condition, cb) {

		var queryString = 'UPDATE ' + tableInput;

		queryString = queryString + ' SET ';
		queryString = queryString + updatecol.toString();
		queryString = queryString + '=';
		queryString = queryString + updateval.toString();
		queryString = queryString + ' WHERE ';
		queryString = queryString + condition;
		queryString = queryString + ';';

		console.log(queryString);
		connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
	},
};

module.exports = orm;
