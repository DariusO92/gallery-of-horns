import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main'
 import Modal from 'react-bootstrap/Modal';
import data from './HornedB.json'

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     showModal: false,
  //   }
  // }
  // hideModalHandler = () => {
  //   this.setState({
  //     showModal: true
  //   })
  // };
  // showModalHandler = () => {
  //   this.setState({
  //     showModal: false
  //   })
  // };

  render(){
    return (
      <>
      <Header/>
      <Main
      data={data}
      />
      <Footer/>
      <Modal/>
     
     </>
    )
    
  }
  
}

// show={this.state.showModal}
// onHide={this.hideModlarHandler}
export default App;