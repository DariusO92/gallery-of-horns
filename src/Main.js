import React from 'react';
import data from './HornedB.json';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  render() {
    let hornB = [];
    data.forEach((animal) => {
      hornB.push(
        <article>
          <HornedBeast 
                title={animal.title}
                image_url={animal.image_url}
                description={animal.description} 
              />
          {/* <HornedBeast 
                title={animal.title}
                image_url={animal.image_url}
                descripton={animal.description} 
        />
         <HornedBeast
              title={animal.title}
              image_url={animal.image_url}
              descripton={animal.description} 
        /> */}
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