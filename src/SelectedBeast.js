import React from 'react';
import Modal from 'react-bootstrap/Modal';


class SelectedBeast extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showModal: true,
    }
  }
  hideModalHandler = () => {
    this.props.setState({
      showModal: true
    })
  };
  showModalHandler = () => {
    this.props.setState({
      showModal: false
    })
  };
  render() {
    return(
     <Modal
      show={this.state.showModal}
      onHide={this.hideModlarHandler}
    >
    </Modal>

    )
 };

 }














 export default SelectedBeast;