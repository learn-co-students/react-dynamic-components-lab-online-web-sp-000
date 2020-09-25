import React, { Component } from "react";

export default class ColorBox extends Component {
  state = {
    todos: [],
  };

  render() {
    if (this.props.opacity >= 0.2) {
      let newOpacity = Math.round((this.props.opacity - 0.1) * 10) / 10;
      return (
        <div className="color-box" style={{ opacity: this.props.opacity }}>
          <ColorBox opacity={newOpacity} />
        </div>
      );
    } else {
      return null;
    }
  }
}
