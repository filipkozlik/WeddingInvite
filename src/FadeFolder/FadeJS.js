import React, { Component } from "react";

import "../index.css";

import back1 from "./../resources/images/back1.jpg";
import back2 from "./../resources/images/back2.jpg";
import back3 from "./../resources/images/back3.jpg";
import back4 from "./../resources/images/back4.jpg";
import back5 from "./../resources/images/back5.jpg";
import back6 from "./../resources/images/back6.jpg";

import img1 from "./../resources/images/img1_720.jpg";
import img2 from "./../resources/images/img2_720.jpg";
import img3 from "./../resources/images/img3_720.jpg";

const stylesCSS = {
  transition: "opacity 3s"
};

const positionCSS = {
  position: "absolute",
  top: "0",
  left: "0"
};

const fitSizeCSS = {
  width: window.innerWidth,
  height: window.innerHeight,
  overflow: "hidden"
};

const photoCSS = {
  width: "100%"
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      textOpacity: 1,
      images: [img1, img2, img3],
      rotate: [false, false, false],
      currentPicture: 0,
      firstImageIndex: 0,
      secondImageIndex: 1,
      timeTimeout: 5000,
      timeInterval: 10000
    };
  }

  changeImages() {
    this.setState(prevState => {
      return {
        secondImageIndex:
          prevState.textOpacity === 1
            ? (prevState.secondImageIndex + 2) % prevState.images.length
            : prevState.secondImageIndex,
        firstImageIndex:
          prevState.textOpacity === 0
            ? (prevState.firstImageIndex + 2) % prevState.images.length
            : prevState.firstImageIndex
      };
    });
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(prevState => {
        return {
          textOpacity: prevState.textOpacity === 1 ? 0 : 1
        };
      });
      setTimeout(this.changeImages.bind(this), this.state.timeTimeout);
    }, this.state.timeInterval);
  }

  onHideText() {
    this.setState({
      textOpacity: 0
    });
  }
  onShowText() {
    this.setState({
      textOpacity: 1
    });
  }
  render() {
    return (
      <div class="site">
        <img
          src={this.state.images[this.state.firstImageIndex]}
          alt=""
          style={{
            ...stylesCSS,
            ...positionCSS,
            ...photoCSS,
            opacity: this.state.textOpacity,
            transform: this.state.rotate[this.state.firstImageIndex]
              ? "rotate(180deg)"
              : "rotate(0deg)"
          }}
        />
        <img
          src={this.state.images[this.state.secondImageIndex]}
          alt=""
          style={{
            ...stylesCSS,
            ...positionCSS,
            ...photoCSS,
            opacity: 1 - this.state.textOpacity,
            transform: this.state.rotate[this.state.secondImageIndex]
              ? "rotate(180deg)"
              : "rotate(0deg)"
          }}
        />
      </div>
    );
  }
}

export default App;
