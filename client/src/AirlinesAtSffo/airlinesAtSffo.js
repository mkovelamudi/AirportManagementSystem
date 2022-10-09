import react, { Component } from "react";
import emirates from "./emirates.png";
import airIndia from "./airIndia.png";
import qatar from "./qatar-airways.png";
import "./AirlinesAtSffo.css";

class Airlines extends Component {
  state = {};
  render() {
    return (
      <div class="row">
        <div class="column">
          <img src={emirates} width="105" />
          <p> Emirates</p>
        </div>
        <div class="column">
          <img src={airIndia} width="100" /> <p> Air India</p>
        </div>
        <div class="column">
          <img src={qatar} width="100" /> <p> Qatar Airways</p>
        </div>
      </div>
    );
  }
}

export default Airlines;
