
var URL_SEARCH = "http://96.126.108.150/angel/wkwo_wine/retrieve";

var API = {
	createQueryString: function(sObj) {
		var qString = $.map(sObj, function(value, key) {
    				return key+"="+value;
					}).join("&");
		return (qString != "") ? "?"+qString : '';
	},
	getProducts: function(searchObj, callback){
		var search_str = this.createQueryString(searchObj);
		var API_URL = URL_SEARCH+search_str;
		console.log(API_URL);
		$.ajax({
			url: API_URL,
			dataType: 'json',
			success: function(data) {
				callback(data);
			}.bind(this),
			error: function(xhr, status, err) {
				console.error("Wines Not Found", status, err.toString());
			}
		});
	}
}

module.exports = API;
