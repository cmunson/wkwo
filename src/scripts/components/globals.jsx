'use strict';

var imagePath = 'http://96.126.108.150/angel/sites/default/files/wine-images/'

var ProcessJSONMixin = {

  proccessJSON: function(data){
    var proccessedJSON = data.map(function(product){
      return {
        title:    product.node_title,
        barcode:  product.field_barcode,
        body:     product.body,
        imageURL:   imagePath + product.field_wine_image.filename,
        grape:    product.field_wine_grape[0],
        region:   'noRegion',
        price:    product.field_wine_price,
        type:     product.field_wine_type[0]
      }
    });
    return proccessedJSON;
  }
};

module.exports = ProcessJSONMixin;
