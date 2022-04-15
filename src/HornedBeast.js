import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import './HornedBeast.css';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: 0,
    }
  }
  handleClicked = () => {
    this.setState({
      clicked: this.state.clicked + 1
    });
    this.props.openModalHandler(this.props.image_url, this.props.description, this.props.title)
  }
  handleImgClick = () => {
    this.showModalHandler(this.props.hornB);
};

  render() {
    return (
      <Col className="mb-5">
        <Card className="h-100">
        <Card.Img variant="top"
         onClick={this.handleClicked}
        src={this.props.image_url} 
        alt={this.props.image_url} 
        />
         <Card.Body>
      {/* <div{this.props.key}> */}
        <Card.Title>
        {this.props.title }
        </Card.Title>
        <Card.Text>
        <p>💚{this.state.clicked} favorites</p>
        </Card.Text>
        <Card.Text>
        <p>{this.props.description}</p>
        </Card.Text>
      {/* </div> */}
           </Card.Body> 

        </Card>

      </Col>

    )
  }
};

export default HornedBeast;