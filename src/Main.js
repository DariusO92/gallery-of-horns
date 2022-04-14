import React from 'react';
import Row from 'react-bootstrap/Row';
import './Main.css'
// import data from './HornedB.json';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  render() {
    let hornB = this.props.data.map((animal, idx) => {
        return (
        <article>
          <HornedBeast
            title={animal.title}
            image_url={animal.image_url}
            description={animal.description}
            key={idx}
            showModalHandle={this.props.showModalHandle}
          />
        </article>
        )

      })
    

    return (
      <main>
        <Row xs={1} sm={3} md={4} lg={6}>
        {hornB}
        </Row>
      </main>


    )

  }
};
export default Main;