import React, { Component } from "react";
import { Sigma, RelativeSize, LoadJSON } from "react-sigma";
import "./Visualization.css";

class Visualization extends Component {
  state = {};

  render() {
    const testGraph = {
      nodes: ["id0", "id1"],
      edges: [{ id: "e0", source: "id0", target: "id1" }]
    };

    return (
      <div className="vis">
        <p>Viz placeholder</p>
        <a
          className="test"
          href="https://dunnock.github.io/react-sigma/?knob-Outbound%20attraction%20distribution=false&knob-Barneshut%20theta=0.5&knob-Timeout=2000&knob-
        Easing%20after%20layout=cubicInOut&knob-Randomize%20node%20positions=locally&knob-Barneshut%20optimize=false&knob-Force%20layout%20in%20backround=
        true&knob-Gravity=1&knob-Edge%20weight%20influence=0&knob-Align%20node%20siblings=false&selectedKind=Settings&selectedStory=Hovers&full=0&down=1&
        left=1&panelRight=1&downPanel=storybook%2Factions%2Factions-panel"
        >
          Sample
        </a>
      </div>
    );
  }
}

export default Visualization;
