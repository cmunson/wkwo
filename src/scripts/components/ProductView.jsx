/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/ProductView.css');

var Data = {
	'8': {
		"id": "8",
		"title": "Gerard Bertrand Saint Chinian 2009",
		"barcode": "000020202020",
		"type": "Red",
		"grape": "GrapeType",
		"region": "Languedoc-Roussillon, France",
		"price": "$21.01",
		"imageurl": "../../images/demo.gif",
		"description": "Deep red color with a tint of purple. Red berries and \"garrigues\" aromas, which is the name for those wild bushes such as thyme, laurel and rosemary. Supple and aromatic on the palate with a harmony between the nose and the mouth (sweet spices). Full and lively, this wine is elegant with soft tannins. \"Les Garriguettes\" reflects this unique Mediterranean terroir."
	},
	'1': {
		"id": "1",
		"title": "Severds Springs",
		"barcode": "000020123210",
		"type": "White",
		"grape": "GrapeType2",
		"region": "Long Island City, Queens",
		"price": "$200.99",
		"imageurl": "../../images/demo.gif",
		"description": "Some wine. You'll like it. Which is the name for those wild bushes such as thyme, laurel and rosemary. Supple and aromatic on the palate with a harmony between the nose and the mouth (sweet spices). Full and lively, this wine is elegant with soft tannins. \"Les Garriguettes\" reflects this unique Mediterranean terroir."
	}
}


var ProductView = React.createClass({

  getStateFromStore: function(props){
  	props = props || this.props;
  	//var id = this.props.params.id ? this.props.params.id : 1;
  	return Data[this.props.params.id];
  },

  getInitialState: function(){
  	alert('this is a test');
  	console.log(this.props.params.id);
  	return this.getStateFromStore();
  },
  
  render: function () {
    return (
        <div>

        	<h1>{this.state.title}</h1>
        	<h2>{this.state.barcode}</h2>

        	<div className="layout-col-1">
        		<img className="product-image" src={this.state.imageurl} />
        		<h2>{this.state.price}</h2>
        	</div>

        	<div className="layout-col-2">
        		<h2>{this.state.type}</h2>
        		<h2>{this.state.grape}</h2>
        		<h2>{this.state.region}</h2>
        		<p>{this.state.description}</p>
        	</div>

        </div>
      );
  }
});

module.exports = ProductView;
