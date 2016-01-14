var React = require('react');
var AddNote = require('./AddNote');

var ButtonGroup = require('react-bootstrap/lib/ButtonGroup');
var Button = require('react-bootstrap/lib/Button');
var DropdownButton = require('react-bootstrap/lib/DropdownButton');
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
			weightData: "material weight"
		}
	},

 handleSubmit: function() {
     this.props.addNote(this.state.dataValue + ": " + this.state.weightData);
    
     var data = {
      fabric : this.state.dataValue,
      weight : this.state.weightData
    }
     this.props.saveValues(data)
     console.log("updated values", this.props.fieldValues);
     
 },

handleSelect: function(e) {

    var newFabric= this.refs.select.value;
   	var newWeight= this.refs.selectB.value;
   
    this.setState({weightData: newWeight, dataValue: newFabric});

 },

 render: function(){
 	//console.log("glist", this.props.gdata);
 	var gdata = this.props.gdata.map(function(item, index){
 		return <option ref="fabric" className="list-group-item" key={index} value={item.fabric}>{item.fabric}</option>
 	})

 	var weightData = this.props.gdata.map(function(item, index){
 		return <option ref="weight" className="list-group-item" key={index} value={item.weight}>{item.weight}</option>
 	})

 	return (
 		<ButtonGroup>
 		<Button onClick={this.handleSubmit}>submit</Button>

 		<select ref="select" value="B" onChange={this.handleSelect}>
	 		<option selected disabled>{this.state.dataValue}</option>
	 		{gdata}
 		</select>
		
		<select ref="selectB" value="B" onChange={this.handleSelect}>
			<option selected disabled>{this.state.weightData}</option>
			{weightData}
		</select>
		
		</ButtonGroup>
 	)
 }

});

module.exports = GList;