/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var FormComponents 			= require('./FormComponents').FormComponents;
var SelectDropdown 			= require('./FormComponents').FormComponents.SelectDropdown;
var SelectDropdownOption 	= require('./FormComponents').FormComponents.SelectDropdownOption;

require('../../styles/PageHome.css');

var PageHome = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function(){
  	return {
  		selectedOption : 'red'
  	}
  },
  render: function() {

  	console.log("The page's state has been updated to: ", this.state);

    return (
      <div className="HomePage">
		<SelectDropdown name="TypesOfWine" selected={this.linkState('selectedOption')}>
			<SelectDropdownOption value="red" label="Red" />
			<SelectDropdownOption value="white" label="White" />
			<SelectDropdownOption value="champagne" label="Champagne" />
		</SelectDropdown>

      	<h1>Scan Something</h1>
      </div>
    );
  }
});

module.exports = PageHome;
