import React from 'react';

class HornedBeast extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name }</h2>
        <image src='https://www.fillmurray.com/640/360' alt='Placeholder image'>Placeholder image</image>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

    )
  }
}

export default HornedBeast;