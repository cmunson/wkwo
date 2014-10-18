/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/PageFilter.css');

var Filters = require('./Filters');

var PageFilter = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function() {
  	return {
  		filterGrape: {value: "Any", label: "Any"},
  		filterType: {value: "Any", label: "Any"},
  		filterPairing: {value: "Any", label: "Any"}
  	}
  },
  render: function () {
    return (
        <div>

			<Filters options={[
				{label: "Grape",    api:"grape",   selected: this.linkState('filterGrape')},
				{label: "Type",     api:"type",    selected: this.linkState('filterType')},
				{label: "Pairing",  api:"pairing", selected: this.linkState('filterPairing')}
			]}/>

			<h2>Filtering by: </h2>
			<ul>
				<li><b>Grape: </b>{this.state.filterGrape.label}</li>
				<li><b>Type: </b>{this.state.filterType.label}</li>
				<li><b>Pairing: </b>{this.state.filterPairing.label}</li>
			</ul>
        </div>
      );
  }
});

module.exports = PageFilter;
