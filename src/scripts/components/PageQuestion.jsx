/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/PageQuestion.css');

var PageQuestion = React.createClass({
  render: function () {
    return (
        <div>
        	<h3>One component that has a list of questions returned from the CMS</h3>
        	<h3>Another component that shows results based on the query adjustments from the questions</h3>
        	<h3>This component needs to have a state that reflects all of the 'Criteria' content types from the CMS - State translates to the 'hypothetical' wine that we will be comparing the inventory to.</h3>
        </div>
      );
  }
});

module.exports = PageQuestion;
