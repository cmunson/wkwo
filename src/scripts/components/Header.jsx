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
				<Link className="btn-home btn-black" to="filter">Filter</Link>
				<Link className="btn-home btn-black" to="product">Show All Products</Link>
				<Link className="btn-home btn-black" to="question">Questions</Link>
			</div>
		);
	}
});

// Depricated - but here for reference
/*
	<Link className="btn-home btn-black" to="product" >Price </Link>
	<Link className="btn-home btn-black" to="product" params={{barcode: 1234567890}}>To Damnnum</Link>
 */

module.exports = Header;
