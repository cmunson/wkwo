/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/PageFilter.css');

var Filters = require('./Filters');
var ProductList = require('./ProductList');


var PageFilter = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function() {
  	return {
  		filterGrape: 	{value: "", label: "Any"},
  		filterType: 	{value: "", label: "Any"},
  		filterPairing: 	{value: "", label: "Any"}
  	}
  },
  render: function () {
    return (
        <div>
        <div>

			<Filters options={[
				{label: "Grape",    api:"grape",   selected: this.linkState('filterGrape')},
				{label: "Type",     api:"type",    selected: this.linkState('filterType')},
				{label: "Pairing",  api:"pairing", selected: this.linkState('filterPairing')}
			]}/>

			<div>New component that gets the filter types, processes the api and returns a productView result</div>

			<h2>Filtering by: </h2>
			<ul>
				<li><b>Grape: </b>{this.state.filterGrape.label}</li>
				<li><b>Type: </b>{this.state.filterType.label}</li>
				<li><b>Pairing: </b>{this.state.filterPairing.label}</li>
			</ul>
        </div>
        <div>
          <ProductList grape={this.state.filterGrape.value} type={this.state.filterType.value} pairing={this.state.filterPairing.value} />
        </div>

        </div>
      );
  }
});

module.exports = PageFilter;
