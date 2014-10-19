/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/Questions.css');

// Remember to remove 'Go' from node_modules. Whatever the fuck that is

var Questions = React.createClass({
  render: function () {
    return (
      <div>

        <div> Not going to lie, I kind of think that this component<br/>should be a group of questions, and another component should be<br/> used for handling each individual question</div>
          
        <div className="question">
          <h1 ref="questionText">Do you drink alone?</h1>
          <QuestionButton text="Sometimes" />
          <QuestionButton text="What's it to you?" />
          <QuestionButton text="All of the godamn time" />
          <QuestionButton text="DON'T JUDGE ME!" />
        </div>

      </div>
      );
  },

});

var QuestionButton = React.createClass({
  render: function () {
    return (
        <div className="question-button">{this.props.text}</div>
      )
  }
})

module.exports = Questions;
