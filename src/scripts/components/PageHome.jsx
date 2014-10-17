/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var FormComponents 			= require('./FormComponents').FormComponents;
var SelectDropdown 			= require('./FormComponents').FormComponents.SelectDropdown;
var SelectDropdownOption 	= require('./FormComponents').FormComponents.SelectDropdownOption;
var FilterDropdown 			= require('./FormComponents').FormComponents.FilterDropdown;
var FilterDropdownOption 	= require('./FormComponents').FormComponents.FilterDropdownOption;


require('../../styles/PageHome.css');

var PageHome = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function(){
  	return {
  		grapeFilter : {value:'red', label:'Red'},
      typeFilter : {value:'cabernet_sauvignon', label:'Cabernet Sauvignon'},
      pairingFilter : {value:'beef', label:'Beef'}
  	}
  },
  render: function() {

  	console.log("The page's state has been updated to: ", this.state);

    return (
    	<span>
	      <div className="HomePage">

  			<FilterDropdown label="Grape" name="GrapeFilter" selected={this.linkState('grapeFilter')}>
  				<FilterDropdownOption value="red" label="Red" />
  				<FilterDropdownOption value="white" label="White" />
  				<FilterDropdownOption value="mixed" label="Varied/Mixed" />
  			</FilterDropdown>

        <FilterDropdown label="Type" name="TypeFilter" selected={this.linkState('typeFilter')}>
          <FilterDropdownOption value="cabernet_sauvignon" label="Cabernet Sauvignon" />
          <FilterDropdownOption value="chardonnay" label="Chardonnay" />
          <FilterDropdownOption value="gewurztraiminer" label="Gewürztraminer" />
          <FilterDropdownOption value="merlot" label="Merlot" />
          <FilterDropdownOption value="pinot_noir" label="Pinot Noir" />
          <FilterDropdownOption value="riesling" label="Riesling" />
          <FilterDropdownOption value="sauvignon_blanc" label="Sauvignon blanc" />
          <FilterDropdownOption value="syrah" label="Syrah" />
        </FilterDropdown>

        <FilterDropdown label="Pairing" name="PairingFilter" selected={this.linkState('pairingFilter')}>
          <FilterDropdownOption value="beef" label="Beef" />
          <FilterDropdownOption value="chicken" label="Chicken" />
          <FilterDropdownOption value="desert" label="Desert" />
          <FilterDropdownOption value="fish" label="Fish" />
          <FilterDropdownOption value="lamb" label="Lamb" />
          <FilterDropdownOption value="pork" label="Pork" />
          <FilterDropdownOption value="poultry" label="Poultry" />
          <FilterDropdownOption value="salad" label="Salad" />
          <FilterDropdownOption value="seafood" label="Seafood" />
        </FilterDropdown>

        <h3>You have selected:</h3>
        <ul>
          <li>{this.state.grapeFilter.label}</li>
          <li>{this.state.typeFilter.label}</li>
          <li>{this.state.pairingFilter.label}</li>
        </ul>

	      </div>
     	</span>
    );

  }
});

module.exports = PageHome;
