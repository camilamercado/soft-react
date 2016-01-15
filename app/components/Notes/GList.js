var React = require('react');
var AddNote = require('./AddNote');

//var ButtonGroup = require('react-bootstrap/lib/ButtonGroup');
//var Button = require('react-bootstrap/lib/Button');
//var DropdownButton = require('react-bootstrap/lib/DropdownButton');
var MenuItem = require('react-bootstrap/lib/MenuItem');
var AddNote = require('./AddNote');

var GList = React.createClass({

propTypes: {
		username: React.PropTypes.string.isRequired,
		addNote: React.PropTypes.func.isRequired,
		saveValues: React.PropTypes.func.isRequired
	},	

getInitialState: function() {
		return {
			dataValue: "fabric type",
			weightData: "material weight",
			widthData: "roll width"
		}
	},

 handleSubmit: function() {
     this.props.addNote(this.state.dataValue + ", " + this.state.weightData + ": " + this.state.widthData);
     //this.props.addNote(this.props.yardageData);
     var data = {
      user   : this.props.username,
      fabric : this.state.dataValue,
      weight : this.state.weightData,
      rollWidth : this.state.widthData
    }
     this.props.saveValues(data)
     console.log("updated values", this.props.yardageData);
     
 },

handleSelect: function(e) {

    var newFabric= this.refs.select.value;
   	var newWeight= this.refs.selectB.value;
   	var newWidth=  this.refs.selectC.value;
   
    this.setState({weightData: newWeight, dataValue: newFabric, widthData: newWidth,});

 },

 render: function(){
 	
 	var gdata = this.props.gdata.map(function(item, index){
 		return <option ref="fabric" className="list-group-item" key={index} value={item.fabric}>{item.fabric}</option>
 	})

 	var weightData = this.props.gdata.map(function(item, index){
 		return <option ref="weight" className="list-group-item" key={index} value={item.weight}>{item.weight}</option>
 	})

 	var widthData = this.props.gdata.map(function(item, index){
 		return <option ref="width" className="list-group-item" key={index} value={item.rollWidth}>{item.rollWidth}</option>
 	})

 	return (
 		<div>
 		<select ref="select" value="B" onChange={this.handleSelect}>
	 		<option selected disabled>{this.state.dataValue}</option>
	 		{gdata}
 		</select>
		
		<select ref="selectB" value="B" onChange={this.handleSelect}>
			<option selected disabled>{this.state.weightData}</option>
			{weightData}
		</select>

		<select ref="selectC" value="B" onChange={this.handleSelect}>
			<option selected disabled>{this.state.widthData}</option>
			{widthData}
		</select>
		
		<button onClick={this.handleSubmit}>submit</button>
		</div>
 	)
 }

});

module.exports = GList;