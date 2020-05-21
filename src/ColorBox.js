import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
        return this.props.opacity >= 0.2 ? (<div className="color-box" style={{opacity: this.props.opacity}}> <ColorBox opacity={(Math.round(10*(this.props.opacity - 0.1)/10))} /> </div>) : null
  }
}
