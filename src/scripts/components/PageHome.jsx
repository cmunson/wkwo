/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var FormComponents 			= require('./FormComponents').FormComponents;
var SelectDropdown 			= require('./FormComponents').FormComponents.SelectDropdown;
var SelectDropdownOption 	= require('./FormComponents').FormComponents.SelectDropdownOption;
var Dropdown 			= require('./FormComponents').FormComponents.Dropdown;
var DropdownOption 	= require('./FormComponents').FormComponents.DropdownOption;


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

/* Depricated but here for reference

        <Dropdown label="Grape" name="GrapeFilter" selected={this.linkState('grapeFilter')}>
          <DropdownOption value="red" label="Red" />
          <DropdownOption value="white" label="White" />
          <DropdownOption value="mixed" label="Varied/Mixed" />
        </Dropdown>

        <Dropdown label="Type" name="TypeFilter" selected={this.linkState('typeFilter')}>
          <DropdownOption value="cabernet_sauvignon" label="Cabernet Sauvignon" />
          <DropdownOption value="chardonnay" label="Chardonnay" />
          <DropdownOption value="gewurztraiminer" label="Gewürztraminer" />
          <DropdownOption value="merlot" label="Merlot" />
          <DropdownOption value="pinot_noir" label="Pinot Noir" />
          <DropdownOption value="riesling" label="Riesling" />
          <DropdownOption value="sauvignon_blanc" label="Sauvignon blanc" />
          <DropdownOption value="syrah" label="Syrah" />
        </Dropdown>

        <Dropdown label="Pairing" name="PairingFilter" selected={this.linkState('pairingFilter')}>
          <DropdownOption value="beef" label="Beef" />
          <DropdownOption value="chicken" label="Chicken" />
          <DropdownOption value="desert" label="Desert" />
          <DropdownOption value="fish" label="Fish" />
          <DropdownOption value="lamb" label="Lamb" />
          <DropdownOption value="pork" label="Pork" />
          <DropdownOption value="poultry" label="Poultry" />
          <DropdownOption value="salad" label="Salad" />
          <DropdownOption value="seafood" label="Seafood" />
        </Dropdown>


*/
