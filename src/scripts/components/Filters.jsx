/**
 * @jsx React.DOM
 */

'use strict';
require('../../styles/Filters.css');

var React = require('react/addons');
var API = require('./API');
var FilterDropdown      = require('./FormComponents').FormComponents.FilterDropdown;
var FilterDropdownOption  = require('./FormComponents').FormComponents.FilterDropdownOption;

var Filters = React.createClass({
  getDefaultProps: function(){
    return {
      options: []
    }
  },
  componentDidMount: function() {
    this.props.options.map(function(option){
      return (
        <div>{option}</div>
        )
    });
    // API.getFilters(this.props.api, this.handleAJAX);
  },
  render: function() {



    return (
      <div>
        testing
      </div>
      );
  }
});

var Filter = React.createClass({
  getDefaultProps: function() {
    return {
      api: ''
    }
  },
  getInitialState: function() {
    return {
      data: []
    }
  },
  componentDidMount: function() {
    API.getFilters(this.props.api, this.handleAJAX);
  },
  handleAJAX: function(data) {
    this.setState({data: data});
  },
  render: function() {



    return (
      <div>test</div>
      );
  }
});

module.exports = Filters;