/** @jsx React.DOM */

// Contrib Components
var _ = require('underscore');
var React = require('react/addons');
var CSSTransitionGroup = React.addons.CSSTransitionGroup;

// Routes
var Router = 	require('react-router');
var Route = 	Router.Route;
var Routes = 	Router.Routes;
var Location = 	Router.Location;
var Link = 		Router.Link;

// Custom libs and variables
//var imagePath = 'http://96.126.108.150/angel/sites/default/files/wine-images/'
var WkwoGlobals = require('./globals');
var Data = require('./data');
var _data = [];

// Custom Components
// var Scanner = require('./Scanner');
var Header = require('./Header');
// var Filters = require('./Filters');

// depricated -- var FiltersWrapper = require('./FiltersWrapper');

var Product = require('./Product');

// Pages and Layouts
var PageHome = require('./PageHome');
var PageProduct = require('./PageProduct');
var PageQuestion = require('./PageQuestion');
var PageFilter = require('./PageFilter');

// Styles
require('../../styles/main.css');


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

var App = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  componentWillMount: function() {

  },
  componentDidMount: function() {
    $.ajax({
      url: "http://96.126.108.150/angel/wkwo_wine/retrieve",
      dataType: 'json',
      success: function(data) {
        this.setState({data: WkwoGlobals.proccessJSON(data)});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("No Wines Found!!", status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function(){
  	return{
  		data: [],
      filterGrape: {label:"Any"},
      filterType: {label:"Any"},
      filterPairing: {label:"Any"},
  	}
  },
  render: function() {
  	var product_names = this.state.data.map(function(product) {
      return (
      	<li><Link to="product" params={{barcode: product.barcode}}>{product.title}</Link></li>
      );
    });
    // var filters = this.state.filters.map(function(filter) {
    //   return (
    //       <FiltersWrapper params={{name: filter.name}} />
    //   );
    // });
    
    return (
      <div>
      	<Header />
        
        <Scanner />
        <div className="page">
	        {this.props.activeRouteHandler()}
	        <ul className="side">

	        </ul>
	    </div>
      </div>
    );
  }
});

var routes = (
  <Routes>
    <Route handler={App}>
      <Route name="home" path="home" handler={PageHome}/>
      <Route name="filter" path="filter" handler={PageFilter}/>
      <Route name="product" path="product" handler={PageProduct}/>
      <Route name="question" path="question" handler={PageQuestion}/>
    </Route>
  </Routes>
);



React.renderComponent(routes, document.getElementById('example'));
