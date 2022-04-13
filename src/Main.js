import React from 'react';
import './Main.css'
import data from './HornedB.json';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  render() {
    let hornB = [];
    data.forEach((animal, idx) => {
      hornB.push(
        <article>
          <HornedBeast 
                title={animal.title}
                image_url={animal.image_url}
                description={animal.description}
                key={idx}
              />
          </article>
      )
    });

    return (
      <main>
        {hornB}
      </main>


    )

  }
};
export default Main;