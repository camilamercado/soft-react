var React = require('react');
var GList = require('./GList');
var AddNote = require('./AddNote');

var Google = React.createClass({
	propTypes: {
		username: React.PropTypes.string.isRequired,
		gdata: React.PropTypes.array.isRequired,
		addNote: React.PropTypes.func.isRequired,
	},
	render: function(){
			return (
			<div> 	
				<h3> Google Sheet data for {this.props.username} </h3>
				<GList 
				yardageData={this.props.yardageData}
				saveValues={this.props.saveValues}
				gdata={this.props.gdata}
				addNote={this.props.addNote}
				username={this.props.username}/>
			</div>
		)
	}
});

module.exports = Google;

	

