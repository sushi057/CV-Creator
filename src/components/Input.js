import React, { Component } from "react";
import Education from "./Education";
import Experience from "./Experience";
import General from "./General";
import Summary from "./Summary";

export default class Input extends Component {
  render() {
    return (
      <div>
        <General />
        <Summary />
        <Education />
        <Experience />
      </div>
    );
  }
}
