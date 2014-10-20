/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var API = require('./API');
var PureRenderMixin = require('react').addons.PureRenderMixin;
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

require('../../styles/Product.css');

var ProductList = React.createClass({

  mixins: [PureRenderMixin],
  handleAJAX: function(data){
    this.setState({
      data: data
    })
  },
  getInitialState: function(){
    return{
      data: []
    }
  },
  componentWillReceiveProps: function(nextProps) {
    console.log(nextProps);
    API.getProducts(nextProps, this.handleAJAX);
  },
  render: function() {
    console.log(this.state.data.length);
    var product_list = this.state.data.map(function(product){
      return (
        <div className="product">
          <div className="product-title">{product.node_title}</div>
          <div className="product-barcode">{product.field_barcode}</div>
          <div className="product-price">{product.field_wine_price}</div>
          <div className="product-nid">{product.nid}</div>
        </div>
      );
    });

    return (
      <ul className={"product-list"}>
        <div><strong>Results: </strong>{this.state.data.length}</div>
        <ReactCSSTransitionGroup transitionName="product">
          {product_list}
        </ReactCSSTransitionGroup>
      </ul>
    );
  }
});

module.exports = ProductList;
