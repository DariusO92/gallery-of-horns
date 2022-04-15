import React from 'react';
import './Main.css'
import HornedBeast from './HornedBeast';


class Main extends React.Component {
  render(){
    return (
      // <Row xs={1} sm={3} md={4} lg={6}>
      <main>
        {this.props.data.map((element, idx) => (
          <HornedBeast
          title={element.title}
          image_url={element.image_url}
          description={element.description}
          key={idx}
          openModalHandler={this.props.openModalHandler}
        />
        )
        )
        }
      </main>
    )
  }
};
  

export default Main;
  