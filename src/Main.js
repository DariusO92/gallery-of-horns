import React from 'react';
import './Main.css'
import HornedBeast from './HornedBeast';
import NumberOfHorns from './NumberOfHorns';

class Main extends React.Component {
  render(){
    return (
      <main>
        <NumberOfHorns
        beast={this.props.beast}
        />
        {this.props.data.map((element, idx) => (
          <HornedBeast
          title={element.title}
          image_url={element.image_url}
          description={element.description}
          key={idx}
          openModalHandler={this.props.openModalHandler}
          // horns={data.horns}
        />
        )
        )
        }
      </main>
    )
  }
};
  

export default Main;
  