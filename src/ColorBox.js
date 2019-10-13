import React, { Component } from 'react';

export default class ColorBox extends Component {
  render() {
    var currOpacity = this.props.opacity

    if(currOpacity >= 0.2){
      return (
        <div className="color-box" style={{opacity: currOpacity}}>
          <ColorBox opacity={currOpacity - 0.1}/>
        </div>
      )
    }
    else
      return null
  }
  
}
