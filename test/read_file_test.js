var assert = require('assert');

var ReadSales = require('../read_sales')

describe('read file', function () {
	
	it('should read the file', function (done) {
		
		var readSales = new ReadSales('./Nelisa Sales History.csv');
		var fields = readSales.mostPopular();

		assert.equal(fields, 448);


	});


});