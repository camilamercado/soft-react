var React = require('react')
var gsheets = require('gsheets');
var gsURL = '1-GLPIWKfyU5s-ldHE3QYnhY0RUwKULkU8s4mzbaYsPg';


var Scarf = React.createClass({
  propTypes: {
    Condition: React.PropTypes.string.isRequired,
    InitStep: React.PropTypes.number.isRequired,
  },

  getInitialState: function() {
    return {
      dataValue: "fabric type",
      weightData: "material weight",
      widthData: "roll width"
    }
  },

  componentDidMount: function (){
   this.props.loadgSheet();
  },

  render: function() {
    console.log(this.props.gdata, this.props.Condition)
    return (
      <div>
        <h3>{this.props.InitStep} : {this.props.Condition}</h3>
      </div>
    )
  }

})

module.exports = Scarf;