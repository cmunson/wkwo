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
var Scanner = require('./Scanner');

// Styles
require('../../styles/main.css');


var App = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  componentWillMount: function() {

  },
  componentDidMount: function() {

  },
  getInitialState: function(){
  	return{
  	}
  },
  render: function() {
    
    return (
      <div>

      	<Header />
        
        <Scanner />

        <div className="page">
	        {this.props.activeRouteHandler()}
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
