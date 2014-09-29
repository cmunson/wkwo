/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var Router = require('react-router');
var Route = Router.Route;
var Routes = Router.Routes;
var Link = Router.Link;

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');

var imageURL = require('../../images/yeoman.png');

var WkwoApp = React.createClass({
  componentDidMount: function() {
  	console.log('test1');
  },
  render: function() {
  	console.log('test');

    return (
      <div className='main'>
        <ReactTransitionGroup transitionName="fade">
          	<img src={imageURL} />
			<ul>
				<li><Link to="product" params={{id: "1"}}>Top</Link></li>
				<li><Link to="product" params={{id: "8"}}>Bottom</Link></li>
			</ul>
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = WkwoApp;
