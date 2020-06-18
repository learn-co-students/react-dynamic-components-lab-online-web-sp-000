import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const colorOpacity = this.props.opacity
    return (
      <div className="color-box" style={{opacity: colorOpacity}}>
       {colorOpacity >= 0.2 ? <ColorBox opacity={colorOpacity-0.1} /> : null}
      </div>
    )
  }

}

