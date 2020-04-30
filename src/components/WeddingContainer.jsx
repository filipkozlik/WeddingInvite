import React from "react";
import "./../App.css";

import Onama from "./../resources/images/onama.jpg";
import Crkva from "./../resources/images/wedding_cartoon.jpg";
import Proslava from "./../resources/images/wedding_real.jpg";
import Sudionici from "./../resources/images/onama.jpg";

var dict = {
  "O nama": Onama,
  Crkva: Crkva,
  Proslava: Proslava,
  Sudionici: Sudionici
};

function WeddingContainer(props) {
  return (
    <div
      className="wedding_container"
      style={{
        backgroundImage: `url(${dict[props.title]})`,
        width: props.size + "px",
        height: props.size + "px"
      }}
      //onMouseOver={e => (dict[props.title] = Crkva)}
      //onMouseOut={(dict[props.title] = Onama)}
    >
      <h1>{props.title}</h1>
    </div>
  );
}

export default WeddingContainer;
