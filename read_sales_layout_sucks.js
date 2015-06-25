var fs = require('fs')
module.exports = function(f){

this.mostPopular = function(){

	var c = fs.readFileSync(f, 'utf8');
	var lines = c.split('\r');
	var fieldLines = [];

for (var i = 0; i < lines.length; i++) {
	var fields = lines[i].split(";");
	if(fields[0].trim().length > 0)
		fieldLines.push(fields);
};

fieldLines = fieldLines.splice(0);

var map = {};

for (var i = 0; i < fieldLines.length; i++) {

	if (map[fieldLines[i][2]] === undefined){
		map[fieldLines[i][2]] = 0
	}

	var n = Number(fieldLines[i][4].replace(',', '.'));
	map[fieldLines[i][2]] = map[fieldLines[i][2]] + n

};

var salesList = [];
for (var name in map){
	salesList.push({
		name : name,
		qty : map[name]
	});
}

salesList.sort(function(i, y){
	return i.qty - y.qty;
})

return salesList[salesList.length - 1];
		
	}

	this.leastPopular = function(){

	var c = fs.readFileSync(f, 'utf8');
	var lines = c.split('\r');
	var fieldLines = [];

	for (var i = 0; i < lines.length; i++) {
		var fields = lines[i].split(";");
		if(fields[0].trim().length > 0)
			fieldLines.push(fields);
	};

fieldLines = fieldLines.splice(0);

var map = {};

for (var i = 0; i < fieldLines.length; i++) {

	if (map[fieldLines[i][2]] === undefined){
		map[fieldLines[i][2]] = 0
	}

	var n = Number(fieldLines[i][4].replace(',', '.'));
	map[fieldLines[i][2]] = map[fieldLines[i][2]] + n

};

var salesList = [];
for (var name in map){
	salesList.push({
		name : name,
		qty : map[name]
	});
}

salesList.sort(function(i, y){
	return i.qty - y.qty;
})

return salesList[0];

}

}