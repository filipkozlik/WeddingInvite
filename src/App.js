import React, { Component } from "react";
import WeddingContainer from "./components/WeddingContainer";
import BackgroundImage from "./resources/images/background.jpg";
import "./App.css";

class App extends Component {
  state = {
    backgroundImages: [
      "url(https://picsum.photos/1200/600/?image=27)",
      "url(https://picsum.photos/600/300/?image=40)",
      "url(https://picsum.photos/600/300/?image=60)",
      "url(https://picsum.photos/600/300/?image=80)",
      "url(./resources/images/onama.jpg)"
    ],
    backgroundImageIndex: 0,
    selectedBackgroundImage: "url(https://picsum.photos/600/300/?image=20)",
    width: window.innerWidth,
    iconSize: Math.floor(0.6 * window.innerWidth),
    windowHeight: Math.floor(
      4 * window.innerWidth * 0.6 + 0.4 * window.innerWidth
    ),
    marginTopBottom: 0.2 * window.innerWidth,
    isMobile: false,
    isHalfScreen: false,
    refreshed: true
  };

  // constructor(props) {
  //   super();
  //   this.handleWindowSizeChange();
  // }

  componentDidMount() {
    // setInterval(() => {
    //   this.setState(prevState => {
    //     return {
    //       backgroundImageIndex: (this.state.backgroundImageIndex + 1) % 4,
    //       selectedBackgroundImage: this.state.backgroundImages[
    //         this.state.backgroundImageIndex
    //       ]
    //     };
    //   });
    // }, 5000);
    //alert("did mount");
    //window.addEventListener("resize", this.handleWindowSizeChange);
  }

  // Setting listener when component will mount
  componentWillMount() {
    //alert("will mount");
    window.addEventListener("resize", this.handleWindowSizeChange("Resize"));
    window.addEventListener("resize", this.handleWindowSizeChange);
  }
  // Removing listener when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  setupMobile = () => {
    var iconModifier = 0.6;
    var iconSize = Math.floor(iconModifier * window.innerWidth);
    this.setState({
      iconSize: iconSize
    });
    this.setState({
      windowHeight: Math.floor(
        4 * iconSize + (1 - iconModifier) * window.innerWidth
      )
    });
    this.setState({
      marginTopBottom: Math.floor(((1 - iconModifier) / 2) * window.innerWidth)
    });
  };
  setupHalfScreen = () => {
    var iconModifier = 0.35;
    var iconSize = Math.floor(iconModifier * window.innerWidth);
    this.setState({
      iconSize: iconSize
    });
    this.setState({
      windowHeight:
        window.innerWidth < window.innerHeight
          ? window.innerWidth
          : window.innerHeight > 2.05 * iconSize
          ? window.innerHeight
          : 2.05 * iconSize
    });
    this.setState({
      marginTopBottom: 0
    });
  };
  setupFullScreen = () => {
    var iconModifier = 0.2;
    var iconSize = Math.floor(iconModifier * window.innerWidth);
    this.setState({
      iconSize: iconSize
    });
    this.setState({
      windowHeight: Math.floor(
        2 * iconSize + (1 - iconModifier) * window.innerWidth
      )
    });
    this.setState({
      marginTopBottom: Math.floor(((1 - iconModifier) / 2) * window.innerWidth)
    });
  };

  // Setting the width state
  handleWindowSizeChange = (caller = "Resize") => {
    this.setState({ width: window.innerWidth });
    this.setState({ isMobile: window.innerWidth <= 500 });
    this.setState({
      isHalfScreen: window.innerWidth <= 1000 && window.innerWidth > 500
    });
    if (window.innerWidth <= 500) {
      this.setupMobile();
    } else if (window.innerWidth <= 1000) {
      this.setupHalfScreen();
    } else {
      this.setupFullScreen();
    }
    alert(
      caller +
        "\n--Width: " +
        this.state.width +
        "\n--Icon modifier: " +
        this.state.iconModifier +
        "\n--Mobile: " +
        this.state.isMobile +
        "\n--Half screen: " +
        this.state.isHalfScreen +
        "\n--Height: " +
        window.innerHeight +
        "\n--Icon size: " +
        this.state.iconSize +
        "\n--window.innerWidth: " +
        window.innerWidth
    );
  };

  render() {
    if (window.performance && this.state.refreshed) {
      if (performance.navigation.type === 1) {
        this.handleWindowSizeChange("Refresh");
        this.setState({ refreshed: false });
      }
    }
    if (this.state.isMobile) {
      return (
        <div
          className="verticalCenterAligned"
          style={{
            height: this.state.windowHeight + "px",
            marginTop: this.state.marginTopBottom + "px",
            marginBottom: this.state.marginTopBottom + "px"
          }}
        >
          <WeddingContainer title="O nama" size={this.state.iconSize} />
          <WeddingContainer title="Crkva" size={this.state.iconSize} />
          <WeddingContainer title="Proslava" size={this.state.iconSize} />
          <WeddingContainer title="Sudionici" size={this.state.iconSize} />
        </div>
      );
    } else if (this.state.isHalfScreen) {
      return (
        <div
          className="verticalCenterAligned"
          style={{
            height: this.state.windowHeight + "px"
          }}
        >
          <div className="horizontalCenterAligned">
            <WeddingContainer title="O nama" size={this.state.iconSize} />
            <WeddingContainer title="Crkva" size={this.state.iconSize} />
          </div>
          <div className="horizontalCenterAligned">
            <WeddingContainer title="Proslava" size={this.state.iconSize} />
            <WeddingContainer title="Sudionici" size={this.state.iconSize} />
          </div>
        </div>
      );
    } else {
      return (
        <div
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            backgroundSize: "cover",
            backgroundImage: `url(${BackgroundImage})`
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              bottom: "0",
              left: "0",
              marginLeft: "100px",
              marginRight: "100px",
              "justify-content": "space-around",
              "align-items": "center",
              display: "flex"
            }}
          >
            <WeddingContainer title="O nama" />
            <WeddingContainer title="Crkva" />
            <WeddingContainer title="Proslava" />
            <WeddingContainer title="Sudionici" />
          </div>
        </div>
      );
    }
  }
}

export default App;
