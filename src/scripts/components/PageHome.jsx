/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/PageHome.css');

var PageHome = React.createClass({

  render: function() {

    return (
      <div className="HomePage">
      	<h1>Scan Something</h1>
      </div>
    );
  }
});

module.exports = PageHome;
