import React, { Component } from "react";
import { Image } from "react-konva";
import { render } from "react-dom";
import Konva from "konva";
import scrubb from "../../img/man2b.jpeg";
import scrubt from "../../img/man2t.png";

class Scrubs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image1: null,
      image2: null
    };
  }

  componentDidUpdate() {
    //images need to be cached to display changes
    this.scrubBottom.cache();
    this.scrubTop.cache();
    this.scrubTop.blue(this.props.color.b);
    this.scrubTop.red(this.props.color.r);
    this.scrubTop.green(this.props.color.g);
  }

  componentDidMount() {
    this.getImage1();
    this.getImage2();
  }

  //Sets sweater to the stage
  getImage1() {
    const image1 = new window.Image();
    image1.src = scrubb;
    image1.onload = () => {
      this.setState({
        image1: image1
      });
    };
  }

  //Sets the top image (scrubt) to the stage
  getImage2() {
    const image2 = new window.Image();
    image2.src = scrubt;
    image2.onload = () => {
      this.setState({
        image2: image2
      });
    };
  }

  //Filters is used to change the color of the top image (scrubt)
  render() {
    return (
      <React.Fragment>
        <Image
          image={this.state.image1}
          x={0}
          y={0}
          width={400}
          height={400}
          ref={node => {
            this.scrubBottom = node;
          }}
          style={{ border: 'none' }} 
        />
        <Image
  filters={[Konva.Filters.RGB]}
  image={this.state.image2}
  x={0}
  y={0}
  width={400}
  height={400}
  ref={node => {
    this.scrubTop = node;
  }}
  style={{ border: 'none' }} // set border to none
/>
      </React.Fragment>
    );
  }
}

export default Scrubs;
