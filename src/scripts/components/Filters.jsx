/**
 * @jsx React.DOM
 */

'use strict';
require('../../styles/Filters.css');

var React = require('react/addons');
var API = require('./API');
var Dropdown      = require('./FormComponents').FormComponents.Dropdown;
var DropdownOption  = require('./FormComponents').FormComponents.DropdownOption;

var Filters = React.createClass({
  getDefaultProps: function(){
    return {
      options: []
    }
  },
  render: function() {

    var filters = this.props.options.map(function(option){
      return (
        <Filter label={option.label} api={option.api} selected={option.selected}/>
        )
    });

    return (
      <div className="filters">
        {filters}
      </div>
      );
  }
});

var Filter = React.createClass({
  getDefaultProps: function() {
    return {
      label: '',
      api: '',
      selected: '',
      showAny: true
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
    var _this = this;
    var selectedClass = "";
    var DropdownItems = this.state.data.map(function(item){
      selectedClass = (item===_this.props.selected.value.value ? "item-selected" : "");
      return (
        <DropdownOption selectClass={selectedClass} value={item} label={item} />
      )
    });

    if (this.props.showAny) {
      DropdownItems.unshift(<DropdownOption value="" label="Any" />);
    }

    //console.log(this.props.selected);

    return (
      <div className="filter">
        <Dropdown label={this.props.label} selected={this.props.selected}>
          {DropdownItems}
        </Dropdown>
      </div>
      );
  }
});

module.exports = Filters;
