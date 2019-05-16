import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    const opacity = this.props.opacity;
    console.log(opacity);
    let newOpacity = opacity - 0.1;
    if(opacity < 0.2) {
      return null;
    } else {
      return (
        <div className="color-box" style={{opacity: 1}}>
          <ColorBox opacity={newOpacity} />
        </div>
      );
    }
  }
}
