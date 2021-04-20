
import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    
    let new_box;

    if(this.props.opacity >= 0.2){
      new_box = <ColorBox opacity={this.props.opacity - 0.1} />
    }else{
      new_box = null;
    }

    return (
      <div className="color-box" style={{opacity: this.props.opacity /*replace null with the value*/}}>
        {new_box}   
      </div>
    )
  
  }

}

