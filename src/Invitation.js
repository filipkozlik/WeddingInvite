import React, { Component } from "react";
import "./Invitation.css";

class App extends Component {
  state = {
    width: window.innerWidth,
    height: window.innerHeight,
    is_under_500: false,
    is_under_1000: false,
    is_under_1500: false,
    is_under_2000: false,
    is_over_2000: false,
    refreshed: true,
  };

  // Setting listener when component will mount
  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange("Resize"));
    window.addEventListener("resize", this.handleWindowSizeChange);
  }
  // Removing listener when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  setupMobile = () => {};
  setupHalfScreen = () => {};
  setupFullScreen = () => {};

  refresh_states() {
    this.setState({ width: window.innerWidth });
    this.setState({ height: window.innerHeight });
    this.setState({ is_under_500: window.innerWidth <= 500 });
    this.setState({
      is_under_1000: window.innerWidth <= 1000 && window.innerWidth > 500,
    });
    this.setState({
      is_under_1500: window.innerWidth <= 1500 && window.innerWidth > 1000,
    });
    this.setState({
      is_under_2000: window.innerWidth <= 2000 && window.innerWidth > 1500,
    });
    this.setState({
      is_over_2000: window.innerWidth > 2000,
    });
  }

  // Setting the width state
  handleWindowSizeChange = (caller = "Resize") => {
    this.refresh_states();
    // alert(
    //   caller +
    //     "\n--Width: " +
    //     this.state.width +
    //     "\n--Height: " +
    //     this.state.height +
    //     "\n--Icon modifier: " +
    //     this.state.iconModifier +
    //     "\n--Mobile: " +
    //     this.state.is_under_500 +
    //     "\n--Half screen: " +
    //     this.state.is_under_1000 +
    //     "\n--Height: " +
    //     window.innerHeight +
    //     "\n--window.innerWidth: " +
    //     window.innerWidth
    // );
  };

  render() {
    if (window.performance && this.state.refreshed) {
      if (performance.navigation.type === 1) {
        this.handleWindowSizeChange("Refresh");
        this.setState({ refreshed: false });
      }
    }
    return (
      <div class="wrapper">
        <div class="box text header">
          <h1>Dragi Mani i Janja,</h1>
          <h1>ovim putem vas pozivamo na naše vjenčanje.</h1>
          <h1>
            Sve informacije o nama i našem vječanju možete pronaći u retcima
            ispod.
          </h1>
          <h1>Veselimo se vašem dolasku,</h1>
          <h1>Vaši Dolores i Filip</h1>
        </div>
        <div class="biography">
          <div class="box about_doli_container doli_about_photo">
            <div class="box center text name">Dolores</div>
            <div class="center text about ">O Dolores</div>
          </div>
          <div class="box about_filip_container filip_about_photo">
            <div class="box center text name">Filip</div>
            <div class="center text about">O Filipu</div>
          </div>
        </div>
        <div class="countdown">
          <div class="box days countdown_color">
            <div class="box center text countdown_title">Dana</div>
            <div class="center text countdown_value">
              <h1>150</h1>
            </div>
          </div>
          <div class="box hours countdown_color">
            <div class="box center text countdown_title">Sati</div>
            <div class="center text countdown_value">
              <h1>3</h1>
            </div>
          </div>
          <div class="box minutes countdown_color">
            <div class="box center text countdown_title">Minuta</div>
            <div class="center text countdown_value">
              <h1>34</h1>
            </div>
          </div>
        </div>
      </div>
      // <div class="wrapper">
      //   <div class="box text header">
      //     <h1>Dragi Mani i Janja,</h1>
      //     <h1>ovim putem vas pozivamo na naše vjenčanje.</h1>
      //     <h1>
      //       Sve informacije o nama i našem vječanju možete pronaći u retcima
      //       ispod.
      //     </h1>
      //     <h1>Veselimo se vašem dolasku,</h1>
      //     <h1>Vaši Dolores i Filip</h1>
      //   </div>
      //   <div class="box about_doli_container">
      //     <div class="box center text name">Dolores</div>
      //     <div class="center text description about">O Dolores</div>
      //   </div>
      //   <div class="box about_filip_container">
      //     <div class="box center text name">Filip</div>
      //     <div class="center text description about">O Filipu</div>
      //   </div>
      // </div>
    );
  }
}

export default App;
