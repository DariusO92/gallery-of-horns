import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';


class SelectedBeast extends React.Component{
  render() {
    return(
      <Modal show={this.props.showModal}
      onHide={this.props.hideModalHandler}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Image src={this.props.image_url}
               alt={this.props.title}
          />
          <Modal.Body>{this.props.description}</Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.hideModalHandler}>Close</Button>
          </Modal.Footer>
      </Modal>
    );
  }
}














 export default SelectedBeast;