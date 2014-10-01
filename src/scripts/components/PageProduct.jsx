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
  	this.setState({
  		data: data
  	});
  },
  componentDidMount: function() {
  	API.getProductById( this.props.params.productId, this.handleAJAX);
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
