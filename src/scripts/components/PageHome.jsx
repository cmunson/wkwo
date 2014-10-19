/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var ScreensaverBarker = require('./ScreensaverBarker');
var ScreensaverAdInternal = require('./ScreensaverAdInternal');
var ScreensaverAdExternal = require('./ScreensaverAdExternal');

require('../../styles/PageHome.css');

/*
  There needs to be a conversation about when internal
  and external ads play and when they are allowed to interrupt
  the barker. How often? Why? What makes sense?

  Maybe this is a good start? Thoughts needed.
 */

var modes = [
  {id: 'barker',     duration: 10000  },
  {id: 'adinternal', duration: 5000   },
  {id: 'adexternal', duration: 5000   }
  ];

var PageHome = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function(){
  	return {
      // Only Global variables should go here.
      // Absolute MUST have variables that have important cascading
      // effects to other modules and pages.
      interval: setInterval(this.changeMode, 10000),
      mode: modes[0].id
  	}
  },
  componentDidMount: function() {

  },
  componentWillUnmount: function() {
    clearInterval(this.state.interval);
  },
  changeMode: function(){

  },
  render: function() {

  	console.log("The page's state has been updated to: ", this.state);

    var currentMode = {};
    switch(this.state.mode){
      case 'barker':
        currentMode = (<ScreensaverBarker />);
        break;
    }

/*
        <div>Have to create some sort of component that maintains the timing of these three views</div>

        <h3>Should bounce between these states</h3>
        <ul>
          <li>Barker - (tries to get the users attention. A screensaver)</li>
          <li>Advertisement - Paid advert</li>
          <li>Advertisement - Internal set by Angel</li>
        </ul>

 */
    return (
    	<span>
	      <div className="HomePage">

        {currentMode}

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
