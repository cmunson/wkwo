/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var API = require('./API');
var Product = require('./Product');
var PureRenderMixin = require('react').addons.PureRenderMixin;
require('../../styles/PageProduct.css');

var PageProduct = React.createClass({
  mixins: [PureRenderMixin],
  handleAJAX: function(data){
  	this.replaceState({
  		data: data
  	});
  },
  componentWillReceiveProps: function(nextProps) {
  	if(nextProps.params.productId){
  		API.getProductById( nextProps.params.productId, this.handleAJAX);
	}else{
	  	API.getAllProducts( this.handleAJAX );
	}
  },
  getInitialState: function(){
    return{
    	data: []
    }
  },
  render: function() {
  	var view_mode = this.state.data.length > 1 ? 'list' : 'detail';
    return (
      <Product viewMode={view_mode} data={this.state.data} />
    );
  }
});

module.exports = PageProduct;
