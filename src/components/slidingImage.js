import React, { Component } from "react";
import "./../App.css";

class App extends Component {
  state = {
    backgroundImages: [
      "url(https://picsum.photos/1200/600/?image=20)",
      "url(https://picsum.photos/600/300/?image=40)",
      "url(https://picsum.photos/600/300/?image=60)",
      "url(https://picsum.photos/600/300/?image=80)"
    ],
    backgroundImageIndex: 0,
    selectedBackgroundImage: "url(https://picsum.photos/600/300/?image=20)"
  };

  componentDidMount() {
    setInterval(() => {
      this.setState(prevState => {
        return {
          backgroundImageIndex: (this.state.backgroundImageIndex + 1) % 4,
          selectedBackgroundImage: this.state.backgroundImages[
            this.state.backgroundImageIndex
          ]
        };
      });
    }, 5000);
  }

  render() {
    return (
      <div
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
          backgroundSize: "cover",
          backgroundImage: this.state.selectedBackgroundImage
        }}
      ></div>
    );
  }
}

export default App;
