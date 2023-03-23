// import React, { Component } from "react";
// import { Image } from "react-konva";
// import Konva from "konva";
// import img1Top from "../../img/man1t.png";
// import img1Bottom from "../../img/man1b.jpeg";
// import img2Top from "../../img/man2t.png";
// import img2Bottom from "../../img/man2b.jpeg";
// import img3Top from "../../img/scrubt.png";
// import img3Bottom from "../../img/scrubb.jpeg";

// const images = [
//   {
//     top: img1Top,
//     bottom: img1Bottom
//   },
//   {
//     top: img2Top,
//     bottom: img2Bottom
//   },
//   {
//     top: img3Top,
//     bottom: img3Bottom
//   }
// ];

// class Scrubs extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       images: []
//     };
//   }

//   componentDidUpdate() {
//     //images need to be cached to display changes
//     this.state.images.forEach(image => {
//       image.bottom.cache();
//       image.top.cache();
//       image.top.blue(this.props.color.b);
//       image.top.red(this.props.color.r);
//       image.top.green(this.props.color.g);
//     });
//   }

//   componentDidMount() {
//     this.setImages();
//   }

//   setImages() {
//     const imagesArray = images.map((img, index) => {
//       const bottomImage = new window.Image();
//       bottomImage.src = img.bottom;
//       const topImage = new window.Image();
//       topImage.src = img.top;

//       return {
//         bottom: bottomImage,
//         top: topImage,
//         index: index
//       };
//     });

//     this.setState({ images: imagesArray });
//   }

//   //Filters is used to change the color of the top image
//   render() {
//     return (
//       <React.Fragment>
//         {this.state.images.map(image => (
//           <React.Fragment key={image.index}>
//             <Image
//               image={image.bottom}
//               x={0}
//               y={0}
//               width={500}
//               height={500}
//               ref={node => {
//                 image.bottom = node;
//               }}
//               style={{ border: 'none' }} 
//             />
//             <Image
//               filters={[Konva.Filters.RGB]}
//               image={image.top}
//               x={0}
//               y={0}
//               width={500}
//               height={500}
//               ref={node => {
//                 image.top = node;
//               }}
//               listening={false}// set border to none
//             />
//           </React.Fragment>
//         ))}
//       </React.Fragment>
//     );
//   }
// }

// export default Scrubs;


import React, { Component } from "react";
import { Image } from "react-konva";
import { render } from "react-dom";
import Konva from "konva";
import scrubb from "../../img/scrubb.jpeg";
import scrubt from "../../img/scrubt.png";

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

  //Sets the bottom image (scrubb) to the stage
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
  image={this.state.image2
  }
  x={0}
  y={0}
  width={400}
  height={400}
  ref={node => {
    this.scrubTop = node;
  }}
  // style={{ border: 'none' }} // set border to none
/>
      </React.Fragment>
    );
  }
}

export default Scrubs;
