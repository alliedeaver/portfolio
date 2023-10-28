import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

     

function GridComplexExample() {
  return (
    <Form action="https://getform.io/f/eda533af-a77b-475a-98bb-b8b2b66e4a16" method="POST"  className='card fixed-bottom mb-5 w-50 offset-3 p-5'>
      <Row className="mb-3">
      <h1 className='contact fst-italic mb-4 center' >
        contact me
     </h1>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Email</Form.Label>
        <Form.Control placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Subject</Form.Label>
        <Form.Control placeholder="" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Message</Form.Label>
          <Form.Control placeholder=""/>
        </Form.Group>
      </Row>
      <Button variant="secondary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default GridComplexExample;



