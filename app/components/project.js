var React = require('react');
var Router = require('react-router');
var ReactFireMixin = require('reactfire');
var FireBase = require('firebase');
var gsheets = require('gsheets');
var assign = require('object-assign')
var gsURL = '1-GLPIWKfyU5s-ldHE3QYnhY0RUwKULkU8s4mzbaYsPg';

var Yardage = require('./Jobs/Yardage');
var Scarf = require('./Jobs/Scarf');

var yardageData = {
  user      : null,
  fabric    : null,
  weight    : null,
  rollWidth : null
};

var scarfData = {
  user      : null,
  fabric    : null,
  finishing : null,
  size      : null
};

var Project = React.createClass({
	getInitialState: function() {
		return {
			step: 1
		}
	},

	saveValues: function(data){
		return function(){
			yardageData =assign({}, yardageData, data)
		}.bind(this)()
	},

	nextStep: function(){
		this.setState({
			step: this.state.step + 1
		})
	},

	previousStep: function(){
		this.setState({
			step : this.state.step - 1
		})
	},

	showStep: function(){
		switch (this.state.step){
			case 1:
					<h3>Step 1</h3>
			case 2:
					<h3>Step 2</h3>
		}
	},

	render: function(){
		<div>step
		{this.showStep()}</div>


	}

})

module.exports = Project;