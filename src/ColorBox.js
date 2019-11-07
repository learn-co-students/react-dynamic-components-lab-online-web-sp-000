import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    const colorBoxOpacity = this.props.opacity
    return (
      <div className="color-box" style={{opacity: colorBoxOpacity}}>
        {colorBoxOpacity >= 0.2 ? (
          <ColorBox opacity={colorBoxOpacity - 0.1}/>
        ) : (
          null 
        )}
      </div>
    )
  }

}
