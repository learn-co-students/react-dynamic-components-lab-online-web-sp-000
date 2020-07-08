import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  //the ColorBox component should render another ColorBox inside itself (recursive components!)
  //an opacity prop should be passed to the child
  //the passed opacity prop should be reduced by 0.1
  //If the opacity value is less than 0.2:
  //do not render another ColorBox (or else we would have infinite ColorBoxes rendering!)
  //instead, the render method should return null
  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
      {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1} /> : null}
      </div>
    )
  }

}