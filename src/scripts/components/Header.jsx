/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;
require('../../styles/Header.css');

var Header = React.createClass({
	render: function() {
		return (
			<div className="header">
				<Link className="btn-home btn-black" to="home">Home</Link>
				<Link className="btn-home btn-black" to="product">To Products</Link>
				<Link className="btn-home btn-black" to="product" query={{barcode: 1234567890}}>To Damnnum</Link>
			</div>
		);
	}
});

module.exports = Header;
