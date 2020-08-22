import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [

    ]
  }

  render() {
    return (
      <div className="color-box" style={{opacity: 100}}>
        {this.props.opacity}
        if (opacity > 0.2){
          <ColorBox opacity={opacity - 1} />
        } else if (opacity < 0.2){
          return null
        }
      </div>
    )
  }

}
