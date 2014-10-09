/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var API = require('./API');
require('../../styles/Filters.css');

$.Velocity.RegisterUI("slideFadeIn", {
    defaultDuration: 100,
    calls: [[{
      opacity: [1, 0],
      scaleY: [1, 0.3],
      scaleX: [1, 0.3],
    }]]
});
$.Velocity.RegisterUI("slideInTop", {
    defaultDuration: 100,
    calls: [[{
      opacity: [1, 0],
      translateY: [0, -30],
    }]]
});
$.Velocity.RegisterUI("slideInLeft", {
    defaultDuration: 100,
    calls: [[{
      opacity: [1, 0],
      translateX: [0, 30],
    }]]
});

var Filters = React.createClass({
  handleAJAX: function(data){
    //console.log("handle name: "+this.props.params.name);
    //console.log(data);
    this.setState({
      data: data
    })
  },
  getInitialState: function(){
    return {
      data: [],
      focused: 0
    }
  },
  componentDidMount: function() {
    API.getFilters(this.props.params.name, this.handleAJAX);
  },
  componentWillUpdate: function(nextProps, nextState) {
    var filterName = ".filter-"+this.props.params.name;
    if (nextProps.visibility) {
      $(filterName+'.dropdown-menu').velocity("slideFadeIn", {easing: 'ease-in', duration: 75});
      $(filterName+'.dropdown-menu .dropdown-icons li').velocity("slideInLeft", {
        stagger: 40,
        duration: 350,
        easing: [0.610, 0.870, 0.710, 1.000],
      });
      $(filterName+'.dropdown-menu .dropdown-item').velocity("slideInTop", {
        stagger: 30,
        duration: 250,
        easing: [0.610, 0.870, 0.710, 1.000],
      });
    } else {
      $(filterName+'.dropdown-menu').velocity("reverse", {display: 'none'});
      $(filterName+'.dropdown-menu .dropdown-item').velocity("reverse");
    }
  },
  handleClick: function(index) {
    this.setState({focused: index});
  },
  render: function() {
    var _this = this;
    var dropdown_options = this.state.data.map(function(option, index){
      var style = 'dropdown-item';
      if(_this.state.focused == index){
          style += ' selected';
      }
      return (
        <li className={style} onClick={_this.handleClick.bind(this, index)} value={option}>{option}</li>
      );
    });
    var filterName = "filter-"+this.props.params.name+" dropdown-menu";
    return (
      <div className="product-filter-inner">
      <div className="dropdown-header">
        <p><span className="label">{this.props.params.name}:</span>
          <span className="dropdown-selection">{this.state.data[this.state.focused]}</span>
        </p>
      </div>
      <div className={filterName}>
        <ul className="dropdown-items">
          {dropdown_options}
        </ul>
      </div>
      </div>
    );
  }
});

module.exports = Filters;
