import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import data from './HornedB.json';

class NumberOfHorns extends React.Component {
  filter = (element) => {
    let numOfHorns = parseInt(element.target.value);
    let data = data;
    if (numOfHorns){
      data = data.filter((data) => data.horns === numOfHorns); 
    }
    this.props.beast(data);

  }
  render() {
    return(
      <Container>
        <Form>
          <Form.Group controlId="horndChoices.ControlSelect1">
            <Form.Label>Pick by horn number</Form.Label>
            <Form.Control id="formcontrol" as="select" onChange={this.filter}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>100</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Container>
    )
  }
}






export default NumberOfHorns;