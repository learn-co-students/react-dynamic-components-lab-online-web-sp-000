import React, { Component } from "react";

export default class ColorBox extends Component {
  state = {
    todos: [],
  };

  render() {
    const newOpacity = this.props.opacity - 0.1;
    return (
      <div className="color-box" style={{ opacity: this.props.opacity }}>
        {newOpacity < 0.1 ? null : <ColorBox opacity={newOpacity} />}
      </div>
    );
  }
}
