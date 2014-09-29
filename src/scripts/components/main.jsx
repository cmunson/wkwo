/** @jsx React.DOM */
var _ = require('underscore');
var React = require('react/addons');
var CSSTransitionGroup = React.addons.CSSTransitionGroup;
var Router = require('react-router');
var Route = Router.Route;
var Location = Router.Location;
var Routes = Router.Routes;
var Link = Router.Link;
var Data = require('./data');

var imagePath = 'http://96.126.108.150/angel/sites/default/files/wine-images/'
var _data = [];

require('../../styles/main.css');

var Scanner = React.createClass({
	getInitialState: function(){
		return {
			value: ''
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
		setInterval(this.keepFocus, 1000);
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
				<input
					className="submit"
					type="button"
					value="Submit"/>
			</div>
		);
	}
});

var App = React.createClass({
  proccessJSON: function(data){

  	var proccessedJSON = data.map(function(product){
  		return {
  			title: 		product.node_title,
  			barcode: 	product.field_barcode,
  			body: 		product.body,
  			imageURL: 	imagePath + product.field_wine_image.filename,
  			grape: 		product.field_wine_graph[0],
  			region: 	'noRegion',
  			price: 		product.field_wine_price,
  			type: 		product.field_wine_type[0]
  		}
  	});
  	_data = proccessedJSON; // Store it locally for fun
  	return proccessedJSON;
  },
  componentWillMount: function() {

  },
  getInitialState: function(){
  	return{
  		data: this.proccessJSON(Data)
  	}
  },
  render: function() {
  	var product_names = this.state.data.map(function(product) {
      return (
      	<li><Link to="product" params={{productId: product.barcode}}>{product.title}</Link></li>
      	);
    });
    return (
      <div>
      	<Header />
        <Scanner />
        <div className="page">
	        <ul className="side">
	          {product_names}
	        </ul>
	        {this.props.activeRouteHandler()}
	    </div>
      </div>
    );
  }
});

var Header = React.createClass({
	render: function() {
		return (
			<div className="header">
				<Link className="btn-home btn-black" to="home">Home</Link>
			</div>
		);
	}
});

var Product = React.createClass({

  render: function() {

    var product = _.find(_data, function(item){
    	return item.barcode == this.props.params.productId;
    }.bind(this));

    return (
      <span>
	      <div className="Product">
	      	<h1>{product.title}</h1>
	      	<img src={product.imageURL} />
	      	<div className="price">{product.price}</div>
	      </div>
	      <div className="Product col-2">
	      	<div className="field">
		      	<div className="field-label">Grape</div>
				<div className="field-content">{product.grape}</div>
			</div>
			<div className="field">
		      	<div className="field-label">Region</div>
				<div className="field-content">{product.region}</div>
			</div>
			<div className="field">
		      	<div className="field-label">Type</div>
				<div className="field-content">{product.type}</div>
			</div>
	      	<div className="field">
		      	<div className="field-label">Description</div>
				<div className="field-content">{product.body}</div>
			</div>
	      </div>
      </span>
    );
  }
});



var AnimatedLocations = React.createClass({

    mixins: [Router.RouterMixin, Router.AsyncRouteRenderingMixin],

    getRoutes: function() {
      return this.props.children;
    },

    render: function() {

      var handler = this.renderRouteHandler();
      var isPopState = this.state.navigation.isPopState;
      var enabled = isPopState ?
                    !!this.props.popStateTransitionName :
                    !this.state.navigation.noTransition;
      var props = {
        component: React.DOM.div,
        transitionEnter: enabled,
        transitionLeave: enabled,
      };
      if (isPopState && this.props.popStateTransitionName) {
        props.transitionName = this.props.popStateTransitionName;
      } else if (this.state.navigation.transitionName) {
        props.transitionName = this.state.navigation.transitionName;
      }

      handler.props.key = this.state.match.path;
      return this.transferPropsTo(CSSTransitionGroup(props, handler));

    }
});


var HomePage = React.createClass({

  render: function() {

    return (
      <div className="HomePage">
      	<h1>Scan Something</h1>
      </div>
    );
  }
});


var routes = (
  <Routes>
    <Route handler={App}>
      <Route name="home" path="home" handler={HomePage}/>
      <Route name="product" path="product/:productId" handler={Product}/>
    </Route>
  </Routes>
);

React.renderComponent(routes, document.getElementById('example'));
