import React, { Component } from "react";
import { Switch, TextField, FormControl, FormControlLabel, RadioGroup, Radio } from "@material-ui/core";
import { CirclePicker } from "react-color";

// Import English and Hindi fonts
// import EnglishFont from "../../fonts/EnglishFont.ttf";
// import HindiFont from "../../fonts/HindiFont.ttf";

class TextAddOn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textChecked: false,
      textStyle: "style1",
      font: "'Brush Script MT', cursive",
      fontWeight: parseInt(props.fontWeight) 
    };
    this.handleTextStyleChange({ target: { value: "style1" } });
  }

  color = [
    "white",
    "#ff0000",
    "#ffa500",
    "#ffff00",
    "#008000",
    "#0000ff",
    "#4b0082",
    "#ee82ee"
  ];
  
handleTextStyleChange = (event) => {
  this.setState({ textStyle: event.target.value }, () => {
    if (this.state.textStyle === "style1") {
      this.props.handleTextStyleChange("style1", "'Brush Script MT', cursive", "lighter");
    } else if (this.state.textStyle === "style2") {
      this.props.handleTextStyleChange(
        "style2",
        "'Noto Sans', sans-serif, cursive",
        "lighter"
      );
    }
  });
};

  //When text is turned on then user will be able to input and select the text color
  render() {
    let fontLink =
      this.state.textStyle === "style2"
        ? "https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@200;500&display=swap"
        : "";
    let fontFamily = this.state.font;
    let fontWeight = "50";

    // Set font based on selected text style
    if (this.state.textStyle === "style1") {
      // fontLink = EnglishFont;
      fontFamily = "'Brush Script MT', cursive";
      fontWeight = "50";
    } else if (this.state.textStyle === "style2") {
      // fontLink = HindiFont;
      fontFamily = "'Noto Sans', sans-serif, cursive";
      fontWeight = "50";
    }
    
    return (
      <div className="text-container">
        {/* <link href={fontLink} rel="stylesheet" /> */}
        Custom Text:
        <Switch
          checked={this.props.textOn}
          onChange={this.props.handleTextChecked("textOn")}
          value="textChecked"
        />
        {this.props.textOn ? (
          <span>
            <TextField
              autoFocus
              margin="dense"
              label="Add your custom text here"
              type="text"
              fullWidth
              value={this.props.text}
              onChange={this.props.handleTextChange}
              style={{ fontFamily, letterSpacing: "0.1em" }}
            />
            <CirclePicker
              colors={this.color}
              onChange={color => {
                this.props.changeTextColor(color);
              }}
              width="max-width"
            />
            <FormControl component="fieldset">
              <RadioGroup aria-label="text-style" name="text-style" value={this.state.textStyle} onChange={this.handleTextStyleChange}>
                <FormControlLabel value="style1" control={<Radio />} label="Style 1" />
                <FormControlLabel value="style2" control={<Radio />} label="Style 2" />
              </RadioGroup>
            </FormControl>
          </span>
        ) : null}
      </div>
    );
}
}

export default TextAddOn;
