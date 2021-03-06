var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function (req, res){
	res.redirect('/burgers');
});

router.get('/burgers', function(req, res){
	burger.all(function(data) {
		var hbsObject = { burgers: data};
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.post('/', function (req, res){
	burger.create(
		[
			'burger_name', 'devoured'
		],
		[
			'"' + req.body.burger_name + '"', req.body.devoured
		], function() {
		res.redirect('/burgers');
	});
});

router.put('/:id', function (req, res){
	var condition = 'id = ' + req.params.id;
	var updatecol = 'devoured';
	var updateval = req.body.devoured;
	console.log('condition: ', condition);
	burger.update(updatecol, updateval, condition, function () {
		console.log("burgerupdated!");
		res.redirect('/burgers');
	});
});

module.exports = router;
