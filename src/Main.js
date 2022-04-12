import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  render() {
    return (
      <main>
        <HornedBeast name='UniWhal' imgUrl='Picture' text='Description'/>
        <HornedBeast name='Rhino Family' imgurl='Picture' text='Description'/>
     </main>
      
     
    )

  }
}
export default Main;