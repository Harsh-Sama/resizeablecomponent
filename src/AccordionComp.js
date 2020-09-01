import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion'
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const AccordionComp = () => {
		
		return(
			<Accordion defaultActiveKey="0">
			  <Card>
			    <Card.Header>
			    <p>Showing Result For</p>
			      <Accordion.Toggle as={Button} variant="link" eventKey="0">
			        Showing Result For
			      </Accordion.Toggle>
			    </Card.Header>
			    <Accordion.Collapse eventKey="0">
			      <Card.Body>Hello! I'm the body</Card.Body>
			    </Accordion.Collapse>
			  </Card>
			  
			</Accordion>
			)
	}

export default AccordionComp;