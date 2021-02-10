import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    let newOpacity = (((this.props.opacity * 100) - 10) / 100)
    return (
      
    <div className="color-box" style={{opacity: this.props.opacity}}>
      {
        newOpacity > 0 
        ? (<ColorBox opacity={newOpacity} />) 
        : null
      }
    </div>
  )
  }

}

