import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
   return (this.props.opacity >= 0.2 ? 
      (<div className="color-box" style={{opacity: this.props.opacity}}>
         <ColorBox opacity={Number((this.props.opacity - 0.1).toPrecision(1))} /> 
      </div>)
      : null 
   )}
}

