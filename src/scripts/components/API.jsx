
var URL_SEARCH = "http://96.126.108.150/angel/wkwo_wine/retrieve";
var URL_FILTER = "http://96.126.108.150/angel/wkwo_wine/filters";

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
	},
	filtersData: function(data, filterName) {
		var filter = $.map(data, function(v, i) {
    	if (v.filter.toLowerCase() == filterName)
	    	return v.value ;
		});
		return filter;
	},
	getFilters: function(filterName, callback){
		$.ajax({
			url: URL_FILTER,
			dataType: 'json',
			success: function(data) {
				callback(this.filtersData(data, filterName));
			}.bind(this),
			error: function(xhr, status, err) {
				console.error("No Filters Returned", status, err.toString());
			}
		});
	}
}

module.exports = API;
