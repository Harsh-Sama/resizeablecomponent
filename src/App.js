import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Collapse from 'react-bootstrap/Collapse'
import { Button} from 'react-bootstrap';

class App extends Component{


	example = () => {
		const [open, setOpen] = React.useState(false);

		return(
			<div>
			
			<Button
		        onClick={() => setOpen(!open)}
		        aria-controls="example-collapse-text"
		        aria-expanded={open}
		      >
		        click
		      </Button>

		      <Collapse in={open}>
		        <div id="example-collapse-text">
		          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
		          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
		          labore wes anderson cred nesciunt sapiente ea proident.
		        </div>
		      </Collapse>
		      </div>
			)
	}


  render(){
    return (
    	//<example />
    	<h1>Hello</h1>
    );    
  }

}

export default App;