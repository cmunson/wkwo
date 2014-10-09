/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Filters = require('./Filters');

var FiltersWrapper = React.createClass({
  getInitialState: function(){
    return {
      dropdownVisible: false
    }
  },
  dropdownToggle: function(index) {
    this.setState({
      dropdownVisible: !this.state.dropdownVisible
    })
  },
  render: function() {
    return (
      <div className="product-filter" onClick={this.dropdownToggle}>
        <Filters params={{name:this.props.params.name}} visibility={this.state.dropdownVisible} />
      </div>
    );
  }
});

module.exports = FiltersWrapper;
