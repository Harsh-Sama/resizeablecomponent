import React, { Component } from 'react';
import example from './exampleFunction';

class App extends Component{
	constructor(){
	    super();
	    this.state={
	      open: false
	    }
	  }

	setOpen = (x) => {
		this.setState({open: x})
	}	  

  render(){
    return (
    	<example open={this.state.open} setOpen={this.setOpen} />
    );    
  }

}

export default App;