import React from 'react';


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: 0,
    }
  }
  handleClicked = () => {
    this.setState({
     clicked: this.state.clicked + 1
    });
  }

  render() {
    return (
      <div id={this.props.key}>
        <h2>{this.props.title }</h2>
        <p>💚{this.state.clicked} favorites</p>
        <img onClick={this.handleClicked}
        src={this.props.image_url} 
        alt={this.props.image_url} 
        />
        <p>{this.props.description}</p>
      </div>

    )
  }
}

export default HornedBeast;