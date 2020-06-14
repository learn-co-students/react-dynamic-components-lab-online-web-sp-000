import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [

    ]
  }

  render() {
    const myStyle = {
      opacity: this.props.opacity
    };
    return this.props.opacity >= 0.2 ? (
      <div className="color-box" style={myStyle}>
        <ColorBox opacity={this.props.opacity - 0.1}/>
      </div>
      ) : null
  }

}
