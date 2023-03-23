import React, { Component } from "react";
import { Button } from "@material-ui/core";

class Clothes extends Component {
  render() {
    const buttonStyle = {
  backgroundImage: 'linear-gradient(315deg, #f1f2f6 0%, #c9c6c6 74%)',
  border: '0',
  borderRadius: '4px',
  boxShadow: 'rgba(0, 0, 0, .3) 0 5px 15px',
  boxSizing: 'border-box',
  color: 'black',
  cursor: 'pointer',
  fontFamily: 'Montserrat,sans-serif',
  fontSize: '.9em',
  margin: '10px',
  padding: '10px 15px',
  textAlign: 'center',
  userSelect: 'none',
  WebkitUserSelect: 'none',
  touchAction: 'manipulation',
  transition: 'background-color 0.3s ease',
  backgroundColor: 'linear-gradient(315deg, #f1f2f6 0%, #c9c6c6 74%)'
};

buttonStyle[':hover'] = {
  backgroundImage: 'linear-gradient(315deg, #c9c6c6 0%, #f1f2f6 74%)',
  backgroundColor: 'linear-gradient(315deg, #c9c6c6 0%, #f1f2f6 74%)'
};
    return (
      <div className="clothes-type">
        <Button style={buttonStyle} onClick={this.props.changeClothing} value="tshirt">
          Women
        </Button>
        <Button style={buttonStyle} onClick={this.props.changeClothing} value="sweater">
          Men
        </Button>
      </div>
    );
  }
}

export default Clothes;