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
  // componentWillReceiveProps: function() {
  //     API.getProducts(this.props.query, this.handleAJAX);
  // },
  componentDidMount: function() {
    console.log(this.props.query);
    API.getProducts( this.props.query, this.handleAJAX);
  },
  getInitialState: function(){
    return{
    	data: []
    }
  },
  render: function() {
  	var view_mode = this.state.data.length > 1 ? 'list' : 'detail';
    return (
      <div>
        <h3>Should fetch all of the information for a wine that can't be returned from a traditional view</h3>
        <Product viewMode={view_mode} data={this.state.data} />
      </div>
    );
  }
});

module.exports = PageProduct;
