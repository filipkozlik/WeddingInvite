import React, { Component } from 'react';

import weddingCartoonImage from "./resources/images/wedding_cartoon.jpg";
import weddingRealImage from "./resources/images/wedding_real.jpg";

class ImageHover extends Component {
  render() {
    return (
       <img
            src={weddingCartoonImage}
            onMouseOver={e => (e.currentTarget.src=weddingRealImage)}
            onMouseOut={e => (e.currentTarget.src=weddingCartoonImage)}
       />
    );
  }
}

export default App;
