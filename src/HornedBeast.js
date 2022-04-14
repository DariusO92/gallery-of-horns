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
  }
  handleImgClick = () => {
    this.showModalHandler(this.props.hornB);
};

  render() {
    return (
      <Col className="mb-5">
        <Card className="h-100">
        <Card.Img
         onClick={this.handleClicked}
        // onClickTwo={this.handleImgClick(this.props.showModalHandler)} 
        src={this.props.image_url} 
        alt={this.props.image_url} 
        />
         <Card.Body>
      <div id={this.props.key}>
        <h2>{this.props.title }</h2>
        <p>💚{this.state.clicked} favorites</p>
        <p>{this.props.description}</p>
      </div>
           </Card.Body> 

        </Card>

      </Col>

    )
  }
}

export default HornedBeast;