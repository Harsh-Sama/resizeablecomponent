import React, { Component } from 'react';
import example from './exampleFunction';

class App extends Component{
	constructor(){
	    super();
	    this.state={
	      open: false,
	      setOpen: false
	
	    }
	  }

  render(){
    return (
    	<example open={this.state.open} setOpen={this.stae.setOpen} />
  
    );    
  }

}

export default App;