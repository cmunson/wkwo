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

var FilterDropdown = React.createClass({
	getInitialState: function(){
		return {
			visible: false
		}
	},
	componentWillMount: function() {
		require('../../styles/Filters.css');
		$.Velocity.RegisterUI("slideFadeIn", {
		    defaultDuration: 100,
		    calls: [[{
		      opacity: [1, 0],
		      scaleY: [1, 0.3],
		      scaleX: [1, 0.3],
		    }]]
		});
		$.Velocity.RegisterUI("start", {
		    defaultDuration: 0,
		    calls: [[{
		      opacity: [0, 1],
		      scaleY: [0.3, 1],
		      scaleX: [0.3, 1],
		    }]]
		});
		$.Velocity.RegisterUI("slideInTop", {
		    defaultDuration: 100,
		    calls: [[{
		      opacity: [1, 0],
		      translateY: [0, -30],
		    }]]
		});
	},
	componentDidMount: function() {
		this.startClosed();
	},
	startClosed: function(){
		$(this.refs.filter.getDOMNode()).velocity("start", {duration: 1});
	},
	animateOpen: function(){
		$(this.refs.filter.getDOMNode()).velocity("slideFadeIn", {easing: 'ease-in', duration: 75});
		$(this.refs.filter.getDOMNode()).find("li").velocity("slideInLeft", {
	        stagger: 40,
	        duration: 350,
	        easing: [0.610, 0.870, 0.710, 1.000]
	    });
	},
	animateClosed: function(){
		$(this.refs.filter.getDOMNode()).velocity("reverse");
		$(this.refs.filter.getDOMNode()).find("li").velocity("reverse");
	},
	handleOnClick: function() {
		!this.state.visible ? this.animateOpen() : this.animateClosed();
		this.setState({visible: !this.state.visible});
	},
	handleOnChange: function(value){
		this.props.selected.requestChange(value);
		this.animateClosed();
	},
	render: function () {

		var options = React.Children.map(this.props.children, function(child){
			// Pass the onChange handler down to each of the FilterDropdownOptions
			child.props.onChange = this.handleOnChange;
			return(child);
		}.bind(this));

		return (
			<span className="filter">
				<span className="filter-dropdown-label">{this.props.label}</span>
				<span className="filter-dropdown-selected" onClick={this.handleOnClick} ref="label">{this.props.selected.value.label}</span>
				<span className="filter-dropdown-wrapper">
					<ul className="filter-dropdown-items" ref="filter" >
						{options}
					</ul>
				</span>
			</span>
		);
	}
});

var FilterDropdownOption = React.createClass({
	getDefaultProps: function(){
		return {
			value: '',
			label: ''
		}
	},
	handleOnClick: function() {
		this.props.onChange({
			'value': this.props.value,
			'label': this.props.label
		});
	},
	render: function () {
		return (
			<li onClick={this.handleOnClick} value={this.props.value}>{this.props.label}</li>
		);
	}
})

module.exports = { FormComponents: {
	SelectDropdown: SelectDropdown,
	SelectDropdownOption: SelectDropdownOption,
	FilterDropdown: FilterDropdown,
	FilterDropdownOption: FilterDropdownOption
	}
}
