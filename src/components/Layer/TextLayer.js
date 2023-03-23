import React, { Component } from "react";
import { Text } from "react-konva";

class TextLayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      textStyle: props.textStyle,
      fontFamily: props.fontFamily,
      fontWeight: props.fontWeight
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.text !== prevProps.text || this.props.textStyle !== prevProps.textStyle) {
      this.setState({
        text: this.props.text,
        textStyle: this.props.textStyle,
        fontFamily: this.props.fontFamily,
        fontWeight: this.props.fontWeight
      });
    }
  }

  handleChange = e => {
  const shape = e.target;
  const scale = shape.getAbsoluteScale();
  if (typeof this.props.onTransform === "function") {
    this.props.onTransform({
      x: shape.x(),
      y: shape.y(),
      width: shape.width() * scale.x,
      height: shape.height() * scale.y,
      rotation: shape.rotation()
    });
  }
};

  render() {
    const { text, textStyle, fontFamily, fontWeight } = this.state;
     // Set font based on selected text style
    const newFontWeight = parseInt(fontWeight) - 200;
    return (
      <Text
        name="text"
        offset={{
          x: -150,
          y: -150
        }}
        width={200}
        wrap="char"
        align="center"
        stroke={this.props.textColor}
        fontSize={20}
        fontFamily={fontFamily}
        fontWeight={newFontWeight}
        opacity={1}
        draggable={true}
        text={text}
        ref={node => {
          this.text = node;
        }}
        onDragEnd={this.handleChange}
        onTransformEnd={this.handleChange}
      />
    );
  }
}

export default TextLayer;
