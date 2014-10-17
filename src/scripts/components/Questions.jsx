/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/Questions.css');
var Go = require('../external/go');


var Questions = React.createClass({
  componentDidMount: function() {

console.log(go);

var $ = go.GraphObject.make;
var myDiagram =
  $(go.Diagram, "myDiagramDiv",
    {
      initialContentAlignment: go.Spot.Center, // Center Diagram contents
      "undoManager.isEnabled": true // enable Ctrl-Z to undo and Ctrl-Y to redo
    });

var myModel = $(go.Model);
// In our model data, each node is represented by a JavaScript object:
myModel.nodeDataArray = [
  { key: "Question" },
  { key: "Answer1" },
  { key: "Answer2" }
];
myDiagram.model = myModel;

  },
  render: function () {

  	var styles = {
  		'height' : 400,
  		'width' : 400,
  		'background' : "white"
  	}
// <div id="myDiagramDiv" style={styles}/>
    return (
        <div className="question">
          <h1>So, what are you thinking about?</h1>
          
        </div>
        
      );
  }
});

module.exports = Questions;
