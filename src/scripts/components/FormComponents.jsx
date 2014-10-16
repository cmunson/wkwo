/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/FormComponents.css');

var SelectDropdown = React.createClass({
	handleOnChange: function(event){
		this.props.selected.requestChange(event.target.value);
	},
	render: function () {

		var options = React.Children.map(this.props.children, function(child){
			return(child);
		}.bind(this));

		return (
			<select onChange={this.handleOnChange} >{options}</select>
		);
	}
});

var SelectDropdownOption = React.createClass({
	getDefaultProps: function(){
		return {
			value: '',
			label: ''
		}
	},
	render: function () {
		return (
			<option value={this.props.value}>{this.props.label}</option>
		);
	}
});

var TestRender = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function(){
  	return {
  		selectedOption : 'red'
  	}
  },
  render: function () {

  	console.log('State has changed to: ', this.state);

    return (
      <SelectDropdown name="TypesOfWine" selected={this.linkState('selectedOption')}>
      	<SelectDropdownOption value="red" label="Red" />
      	<SelectDropdownOption value="white" label="White" />
      	<SelectDropdownOption value="champagne" label="Champagne" />
      </SelectDropdown>
      );
  }
});

module.exports = { FormComponents: {
	SelectDropdown: SelectDropdown,
	SelectDropdownOption: SelectDropdownOption
	}
}
