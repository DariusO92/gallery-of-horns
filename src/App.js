import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main'
import data from './HornedB.json'
import SelectedBeast from './SelectedBeast';
import NumberOfHorns from './NumberOfHorns';
//  import Modal from 'react-bootstrap/Modal';
// import Row from 'react-bootstrap/Row';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title: '',
      image_url: '',
      description: '',
    }
  }
  hideModalHandler = () => {
    this.setState({
      showModal: false
    })
  };
  openModalHandler = (description, image, title) => {
    this.setState({
      showModal: true,
      title: title,
      image_url: image,
      description: description,

    });
  };
  beast = (data) => {this.state(data)};

  render(){
    return (
      <>
      <Header/>
     
      <Main
      data={data}
      showModal={this.state.showModal}
      openModalHandler={this.openModalHandler}
      hideModalHandler={this.hideModalHandler}
      title={this.state.title}
      image_url={this.state.image_url}
      description={this.state.description}
      beast={this.beast}

      />
      <Footer/>
      <SelectedBeast
      title={this.state.title}
      image_url={this.state.image_url}
      description={this.state.description}
      showModal={this.state.showModal}
      hideModalHandler={this.hideModalHandler}
      />
     
     </>
    )
    
  }
  
}

export default App;