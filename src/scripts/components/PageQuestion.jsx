/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Questions = require('./Questions');
require('../../styles/PageQuestion.css');

/*
One component that has a list of questions returned from the CMS
Another component that shows results based on the query adjustments from the questions
This component needs to have a state that reflects all of the 'Criteria' content
types from the CMS - State translates to the 'hypothetical' wine that we will
be comparing the inventory to.
*/

var PageQuestion = React.createClass({
  render: function () {
    return (
        <div>
        	<Questions />
        </div>
      );
  }
});

module.exports = PageQuestion;
