var React = require('react');
var Router = require('react-router');
var ReactFireMixin = require('reactfire');
var FireBase = require('firebase');
var gsheets = require('gsheets');
var assign = require('object-assign')
var gsURL = '1-GLPIWKfyU5s-ldHE3QYnhY0RUwKULkU8s4mzbaYsPg';

var Notes = require('./Notes/Notes');
var NotesList = require('./Notes/NotesList');
var AddNote = require('./Notes/AddNote');
var Google = require('./Notes/gSheet');
var GList = require('./Notes/GList');

var fieldValues = {
  fabric    : null,
  weight    : null
};

var Profile = React.createClass({
	
	loadgSheet: function(){
		gsheets.getWorksheet(gsURL, this.state.sheetName, function(err, res) {
		    var loadgdata = res.data;
		    if(this.isMounted()){
		      this.setState({gdata: loadgdata});
		    }
		}.bind(this));
	},

	mixins: [ReactFireMixin],
	getInitialState: function() {
		return {
			notes: [1,2,3],
			id: [],
			gdata: [],
			sheetName: "Fabric Inventory"
		}
	},

	componentDidMount: function (){
		//load FireBase Ref
		this.ref = new FireBase('https://software-studios.firebaseio.com');
		var childRef = this.ref.child(this.props.params.username);
		this.bindAsArray(childRef, 'notes');
		//Call gSheet Loading Function
		this.loadgSheet();
    },


	componentWillUnmount: function(){
		this.unbind('notes');
	},

	handleAddNote: function(newNote) {
		//update firebase with newNote
		//firebase ref / username --> .
		//eval length of notes children --> .
		//set new item (newNote) at end of list with key of notes.length
		this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote)
		console.log(this.state.notes.length);
	},

	saveValues: function(field_value) {
	    return function() {
	      fieldValues = assign({}, fieldValues, field_value)
	    }.bind(this)()
  	},


	render: function (){	
		return (

			<div className="row">
				<div className="col-md-4">
					<Google 
					fieldValues={fieldValues}
					username={this.props.params.username} 
					sheetName={this.state.sheetName} 
					gdata={this.state.gdata}
					saveValues={this.saveValues}
					addNote={this.handleAddNote}/>
					
					<Notes 
					username={this.props.params.username} 
					notes={this.state.notes}
					addNote={this.handleAddNote}/>
				</div>
			</div>

		)
	}
})


module.exports = Profile;
