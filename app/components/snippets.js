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

saveValues: function(data){
	return function(){
		yardageData =assign({}, yardageData, data)
	}.bind(this)()
},


//************************////************************////************************//


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

//||||||||||||||||||||||||////||||||||||||||||||||||||////||||||||||||||||||||||||//

nextStep: function(e) {
    e.preventDefault()
    var data = {
      fabric     : this.refs.name.getDOMNode().value,
      finishing : this.refs.password.getDOMNode().value,
      size    : this.refs.email.getDOMNode().value,
    }
    this.props.saveValues(data)
    this.props.nextStep()
  },

//||||||||||||||||||||||||////||||||||||||||||||||||||////||||||||||||||||||||||||//

//||||||||||||||||||||||||////||||||||||||||||||||||||////||||||||||||||||||||||||//
//************************////************************////************************//