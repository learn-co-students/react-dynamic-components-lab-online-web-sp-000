import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }
  render() {
    for (let opacity = 1; opacity >= 0.2; opacity -= 0.1) {
      return (
        <div className="color-box" style={{opacity: opacity}}>
          {this.props.opacity}
        </div>
      )
    }
  }

}

