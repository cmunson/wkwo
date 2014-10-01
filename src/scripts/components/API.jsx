
var URL_PRODUCT_DETAIL 	= "http://96.126.108.150/angel/wkwo_wine/retrieve?barcode=";
var URL_FULL_LIST 		= "http://96.126.108.150/angel/wkwo_wine/retrieve";

var API = {
	getProductById: function(id, callback){
		var API_URL = URL_PRODUCT_DETAIL+id;
		$.ajax({
			url: API_URL,
			dataType: 'json',
			success: function(data) {
				callback(data);
				return data;
			}.bind(this),
			error: function(xhr, status, err) {
				console.error("Wines Not Found", status, err.toString());
			}
		});
	},
	getAllProducts: function(callback){
		$.ajax({
			url: URL_FULL_LIST,
			dataType: 'json',
			success: function(data) {
				callback(data);
				return data;
			}.bind(this),
			error: function(xhr, status, err) {
				console.error("Wines Not Found", status, err.toString());
			}
		});
	}
}

module.exports = API;