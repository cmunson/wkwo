/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var API = require('./API');
var PureRenderMixin = require('react').addons.PureRenderMixin;

require('../../styles/Product.css');

var Product = React.createClass({

  mixins: [PureRenderMixin],
  getInitialProps: function(){
  	return ({
  		data: [],
  		viewMode: 'detail'
  	});
  },
  render: function() {

  	var product_list = this.props.data.map(function(product){
  		return (
  			<div className="product">
  				<div className="product-title">{product.node_title}</div>
  				<div className="product-barcode">{product.field_barcode}</div>
  				<div className="product-price">{product.price}</div>
  				<div className="product-nid">{product.nid}</div>
  			</div>
  		);
  	});

    return (
      <ul className={"product-viewmode-"+this.props.viewMode}>
      	{product_list}
      </ul>
    );
  }
});

module.exports = Product;
