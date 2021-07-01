import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    let opacity = this.props.opacity
    return this.props.opacity < 0.2 ? null: (<div 
    className="color-box" style={{opacity}}>
      <ColorBox opacity = {opacity - 0.1} />
    </div>)
  }
}