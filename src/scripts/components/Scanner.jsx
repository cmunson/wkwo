/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Router = require('react-router');

require('../../styles/Scanner.css');

var Scanner = React.createClass({
	getInitialState: function(){
		return {
			value: '',
      filterGrape: '',
      filterType: '',
      filterPairing: ''
		}
	},
	keepFocus: function() {
		this.refs.input.getDOMNode().focus();
		console.log('keeping focus');
	},
	handleKeyDown: function(e) {
      if(e.which == 13){
      	console.log('transition to: ' + this.state.value);
		Router.transitionTo('product', {productId: this.state.value ? this.state.value : 47995855093});
		this.refs.input.getDOMNode().focus();
      	this.setState({
      		value: ''
      	})
      }
    },
	onChange: function(event){
		this.setState({
			value: event.target.value
		});
	},
	componentDidMount: function() {
		// setInterval(this.keepFocus, 1000);
	},
	render: function() {
		return (
			<div className="barcode-wrapper">
				<input
					ref="input"
					className="barcode"
					type="text"
					value={this.state.value}
					name="barcode"
					onChange={this.onChange}
					onKeyDown={this.handleKeyDown}/>
			</div>
		);
	}
});

module.exports = Scanner;
