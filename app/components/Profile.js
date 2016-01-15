var React = require('react');
var Router = require('react-router');
var ReactFireMixin = require('reactfire');
var FireBase = require('firebase');
var gsheets = require('gsheets');
var assign = require('object-assign')
var Yardage = require('./Jobs/Yardage');
var Scarf = require('./Jobs/Scarf');

var gsURL = '1-GLPIWKfyU5s-ldHE3QYnhY0RUwKULkU8s4mzbaYsPg';

var Profile = React.createClass({

    loadgSheet: function(){
      gsheets.getWorksheet(gsURL, this.state.condition, function(err, res) {
          var loadgdata = res.data;
          if(this.isMounted()){
            this.setState({gdata: loadgdata});
          }
      }.bind(this));
    },

	getInitialState: function() {
		return {
			initStep: 1,
			condition: "start",
			gdata: []
		}
	},

	handleSelect: function(e){
		 if(this.refs.select.value === "yardage"){ 
			 this.setState({ initStep: 2, condition: "yardage"})
		 } else if(this.refs.select.value === "scarf"){
		 	this.setState({ initStep: 3, condition: "scarf"})
		 } else {
		 	this.setState({ initStep: 1 })
		 }	  
	},

	startJob: function(){
		switch (this.state.initStep){
			case 1:
			return <h3>1 : {this.state.condition}</h3>
			case 2:
			return <Yardage 
					InitStep={this.state.initStep}
					Condition={this.state.condition}
					gdata={this.state.gdata}
					loadgSheet={this.loadgSheet}/>
			case 3:
			return <Scarf 
					InitStep={this.state.initStep}
					Condition={this.state.condition}
					gdata={this.state.gdata}
					loadgSheet={this.loadgSheet}/>
		}
	},

	render: function(){
		return (
		
		<div className="row">
		{this.startJob()}
			<select ref="select">
				<option selected disabled>JOB TYPE</option>
		 		<option>yardage</option>
		 		<option>scarf</option>
	 		</select>
	 		<button onClick={this.handleSelect}>Submit</button>
		</div>
		
		)
	}

})

module.exports = Profile;