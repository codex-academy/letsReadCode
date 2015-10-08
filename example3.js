var fs = require('fs')
module.exports = function(salesDataFilePath){
	this.findLeastPopularProduct = function(){

		var productSales = productsSalesInfo(salesDataFilePath)
		productSales.sort(function(product1, product2){
			return product1.qty - product2.qty;
		});
		var leastPopularProduct = productSales[0]
		return leastPopularProduct;
	}

	this.mostMostPopularProduct = function(){
		var productSales = productsSalesInfo(salesDataFilePath)
		productSales.sort(function(product1, product2){
			return product1.qty - product2.qty;
		});
		var mostPopularProduct = productSales[productSales.length-1]
		return mostPopularProduct;
	}
	
	function productsSalesInfo(filePath){
		var salesData = readSalesData(filePath);
		removeHeader(salesData);
		var salesPerProduct = salesPerProduct(salesData);
		var productSales = createSalesList(salesPerProduct);
		return productSales;
	}
	
	function readSalesData(filePath){
		var fileContents = fs.readFileSync(filePath, 'utf8');
		var lines = fileContents.split('\r');
		var salesData = [];
		for (var i = 0; i < lines.length; i++) {
			var fields = lines[i].split(";");
			if(fields[0].trim().length > 0)
				salesData.push(fields);
		};
		return salesData;
	}

	function removeHeader(salesDataList){
		return salesDataList.splice(0);
	}

	function salesPerProduct(salesData){
		var salesPerProduct = {};

		for (var i = 0; i < salesData.length; i++) {
			var saleItem = salesData[i];

			if (salesPerProduct[saleItem[2]] === undefined){
				salesPerProduct[saleItem[2]] = 0
			}

			var n = Number(salesData[i][4].replace(',', '.'));
			salesPerProduct[salesData[i][2]] = salesPerProduct[salesData[i][2]] + n
		};

		return salesPerProduct;
	}

	function createSalesList(salesPerProduct){
		var salesList = [];
		for (var productName in salesPerProduct){
			salesList.push({
				name : productName,
				qty : salesPerProduct[productName]
			});
		}
		return salesList;
	}
}
