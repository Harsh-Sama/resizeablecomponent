import React, { Component } from 'react';
import AccordionComp from './AccordionComp';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class App extends Component{
  render(){
    return (
    	<AccordionComp>
    		<div>test</div>
			<span>Hello</span>
			<Button>Click Me</Button>
    	</AccordionComp>
    );    
  }
}

export default App;