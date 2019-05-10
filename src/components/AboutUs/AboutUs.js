import React, { Component } from "react";
import "./AboutUs.css";

class AboutUs extends Component {
  state = {};
  render() {
    return (
      <div className="about">
        <h1>Digital Bridges: SDSU DH Initiative Network Visualization</h1>
        <p>
          SDSU's Digital Humanities and Global Diversity Initiative web-based
          visual topometric network mapping and archive of humanities and
          qualitative social science research by students, faculty, and alumni.
        </p>
        <p>
          Digital Bridges is a web-based visual networked map of digital
          humanities and social science research at SDSU. It will make visible
          the range of expertise and interests in our community, connect
          researchers across disciplines, and locate new opportunities for
          interdisciplinary collaboration. The goal is to eventually scale the
          site up for researchers across the CSU to create profiles and connect
          with each. The project is funded through a CSU Innovation Minigrant
          (awarded June 2018).
        </p>
        <p>
          Co-PIs: Joanna Brooks, Associate Vice President for Faculty
          Advancement; Pam Lach, Digital Humanities Librarian Lead
        </p>
        <p>Developer: Jin Zou</p>
      </div>
    );
  }
}

export default AboutUs;
