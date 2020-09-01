import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Collapse from 'react-bootstrap/Collapse'
import { Button} from 'react-bootstrap';

const example = () => {
		const [open, setOpen] = React.useState(false);

		return(
			<div>
			
			<Button
		        onClick={() => setOpen(!open)}
		        aria-controls="example-collapse-text"
		        aria-expanded={open}
		      >
		        Showing Result for
		      </Button>

		      <Collapse in={open}>
		        <div id="example-collapse-text">
		          Random Text
		          Missing Text:
		        </div>
		      </Collapse>
		      
		      </div>
			)
	}

export default example;