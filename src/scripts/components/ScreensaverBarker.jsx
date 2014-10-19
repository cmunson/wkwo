/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/ScreensaverBarker.css');

var TemporaryBarkerFeed = [
  {text: '<span class="barker-red">Hey you.</span><br/>I like your face.<br/>Come over here.'},
  {text: 'I wonder what Bono is doing right now.<br/><br/>Probably something shitty.'},
  {text: 'Grapes are good. Wine is also good. So thats good.'},
  {text: 'Nobody has touched me in a while..<br/> Now I know how your mother feels!<br/>OH BURN!<br/><i>BURNS SO HOT!</i>'},
  {text: 'Just another rambling box for you to ignore.<br/>No big deal. I don\'t have feelings.'},
  {text: 'I touched this device and you\'ll never guesss what happened next! - TOUCH HERE'},
  {text: 'Tap the screen if you love hip hop.<br/>Tap the screen if you don\'t love hip hop.</br><b>Just tap the godamn screen!</b>'}
];

var ScreensaverBarker = React.createClass({
  getInitialState: function() {

  	// Shuffle the incoming Barker information
  	TemporaryBarkerFeed = this.shuffle(TemporaryBarkerFeed);

  	var DataCopy = this.cloneObject( TemporaryBarkerFeed );
  	console.log(DataCopy.length);
  	return {
  		data: TemporaryBarkerFeed, 	// Holds all of the items all of the time
  		queue: DataCopy, 			// Slowly drains and then is eventually replaced by data when it's empty
  		text: DataCopy.shift().text,
  		interval: setInterval(this.cycle, 5000)
  	}
  },
  cloneObject: function(object){
  	return JSON.parse( JSON.stringify( object ) );
  },
  cycle: function () {

  	$(this.refs.text.getDOMNode()).velocity("slideFadeIn", {easing: 'ease-in', duration: 75});
		
  	var bark = this.state.queue.shift().text;
  	var data = this.state.queue.length==0 ? this.shuffle( this.cloneObject( this.state.data ) ) : this.state.queue;
  	this.setState({
  		queue: data,
  		text: bark
  	})

  },
  componentWillMount: function(){
  		$.Velocity.RegisterUI("slideFadeIn", {
		    defaultDuration: 100,
		    calls: [[{
		      opacity: [1, 0],
		      scaleY: [1, 0.3],
		      scaleX: [1, 0.3],
		    }]]
		});
  },
  componentWillUnmount: function() {
  	clearInterval(this.state.interval);
  },
  shuffle: function(array) {

  	// Borrowed from:
  	// http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  	
    var currentIndex = array.length, temporaryValue, randomIndex ;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  },
  render: function () {


  	// This would be AMAZING if we could do CSS effects with certain words
  	// Look at this game for inspiration or thoughts on how to do it when sober
  	// https://www.youtube.com/watch?v=ufYoidk0_ac
  	// 
  	// They use the text to convey emotion. It'll do a number of things
  	// 1.) Show each letter one at a time from left to right
  	// 2.) Colorize certain words
  	// 3.) Shake the letters all at the same time to show urgency/alarm
  	// 4.) Wave the letters in a sine wave pattern to denote OOooOOOooooohh yeah.
  	// 5.) Pause words from being displayed
  	// 6.) Scroll up/down as it enters/leaves
  	//
  	// Maybe more fun stuff. The cool thing is that we can do all of that with
  	// just CSS and transformations/transitions if we can wrap the text in
  	// the correct classes.

    return (
        <div className="barker">
        	<div><b>Barker Mode</b></div>
        	<h1 dangerouslySetInnerHTML={{__html: this.state.text }} ref="text" />
        </div>
      );
  }
});

module.exports = ScreensaverBarker;
