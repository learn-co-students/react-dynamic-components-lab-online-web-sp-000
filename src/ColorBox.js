import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    // let newOpacity;
    // if (this.props.opacity >= 0.2) { newOpacity = this.props.opacity - 0.1; }
    return (
      <div className="color-box" style={{opacity: 1}}>
        {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1}></ColorBox> : null}
      </div>
    )
  }
  
}
