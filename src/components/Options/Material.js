import React, { Component } from "react";
import { Button } from "@material-ui/core";

class Material extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showChart: false
    };
    this.handleChartClick = this.handleChartClick.bind(this);
  }

handleChartClick() {
  this.setState(prevState => ({
    showChart: !prevState.showChart
  }));
}

  render() {
    return (
      <div>
        <h2 style={{marginLeft: '10px'}}>Description</h2>
        <ul>
          <li>Fit Type: Classic</li>
          <li>Material - Polycotton Material.</li>
          <li>Scrub Top and Scrub Pyjamas included.</li>
          <li>Pyjamas with back elastic as well as drawstrings, 2 side pockets for essentials in pyjama.</li>
          <li>V neck with 2 down pockets in top.</li>
          <li>True to sizing please select a bigger size if you fall in between sizes according to the Size Chart provided in the photos.</li>
        </ul>
        <h2 style={{marginLeft: '10px'}}>
          <a href="#" onClick={this.handleChartClick}>Size Chart</a>
        </h2>
        {this.state.showChart &&
          <img src={process.env.PUBLIC_URL + '/img/size-chart.jpeg'} alt="Your Image" style={{ width: '60%' ,height:'60%'}}/>
        }
      </div>
    );
  }
}

export default Material;
