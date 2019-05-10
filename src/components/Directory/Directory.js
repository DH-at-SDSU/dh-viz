import React, { Component } from "react";
import "./Directory.css";
import sample from "../../images/directorymock.png";

class Directory extends Component {
  render() {
    return (
      <div className="directory">
        <h1>Proof of Concept From SDSU's Faculty Directory</h1>
        <img src={sample} alt="Directory Concept" />
      </div>
    );
  }
}

export default Directory;
