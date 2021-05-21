import React, { Component } from "react";

export default class ColorBox extends Component {
  state = {
    todos: [],
  };

  render(opacity) {
    const colorOpacity = this.props.opacity;
    while (colorOpacity >= 0.2) {
      return (
        <div className="color-box"
          style={{ opacity: colorOpacity }}
        >
          <ColorBox opacity={colorOpacity - 0.1} />
        </div>
      );
    }

    return null;
  }
}
