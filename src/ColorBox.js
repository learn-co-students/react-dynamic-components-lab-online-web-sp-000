import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    let opacity = this.props.opacity
    if (opacity >= 0.2){
      let newOpc = this.props.opacity - 1
      let rVal = (
      <ColorBox opactiy={newOpc}/>
      )
    }
    else{
      let rVal = null
    }
    return rVal
  }

}

