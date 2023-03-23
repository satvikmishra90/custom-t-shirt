import React, { Component } from "react";
import { CirclePicker } from "react-color";

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.itemColor = this.props.itemColor;
  }
  circleSize = 35;
  circleSpacing = 2;
  tshirt = ["#2a93d9", "#0D64A4", "#4961e1", "#061580", "#551361"];
  sweater = ["#2a93d9", "#0D64A4", "#4961e1", "#061580", "#551361"];

  //changes the color to be shown depending on the clothing type
  render() {
    return (
      <div className="color-picker">
        {this.props.clothing === "tshirt" ? (
          <CirclePicker
            id="circle-picker"
            width="max-content"
            circleSize={this.circleSize}
            colors={this.tshirt}
            onChange={color => {
              this.props.changeColor(color);
            }}
          />
        ) : (
          <CirclePicker
            id="circle-picker"
            width="max-content"
            circleSize={this.circleSize}
            colors={this.sweater}
            onChange={color => {
              this.props.changeColor(color);
            }}
          />
        )}
      </div>
    );
  }
}

export default ColorPicker;
