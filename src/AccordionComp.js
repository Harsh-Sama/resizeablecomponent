import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion'
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './AccordionComp.css';

const AccordionComp = () => {
		
		return(
			<Accordion defaultActiveKey="0">
			  <Card>
			    <Card.Header>
			    <div className="flex-div">
				    <span>Showing Result For</span>
				      <Accordion.Toggle as={Button} variant="link" eventKey="0">
				        Showing Result For
				      </Accordion.Toggle>
			    </div> 
			    </Card.Header>
			    <Accordion.Collapse eventKey="0">
			      <Card.Body>Hello! I'm the body</Card.Body>
			    </Accordion.Collapse>
			  </Card>
			  
			</Accordion>
			)
	}

export default AccordionComp;