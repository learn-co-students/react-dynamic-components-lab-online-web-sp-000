import React, { Component } from 'react';

export default class ColorBox extends Component {

  

  state = {
    todos: [
      
    ]
  }

  

  render() {

    const newOpacity = this.props.opacity - 0.1
    if (this.props.opacity >= 0.2) {
      //debugger
      console.log(newOpacity);
      return (
      
        <div className="color-box" style={{opacity: this.props.opacity  /*replace null with the value*/}}>
          
          <ColorBox opacity={newOpacity} />
        </div>
      )
    } else {
      return null
    }
    
  }

}

