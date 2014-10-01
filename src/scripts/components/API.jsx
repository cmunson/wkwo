
var URL_PRODUCT_DETAIL = "http://96.126.108.150/angel/wkwo_wine/retrieve?barcode=";
var URL_TERM_SEARCH = "http://96.126.108.150/angel/wkwo_wine/retrieve?barcode=";

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
	getProductsByTerm: function(term){
		console.log('Getting products by term');
	}
}

module.exports = API;