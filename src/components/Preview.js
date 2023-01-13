import React, { Component } from "react";

export default class Preview extends Component {
  render() {
    return (
      <>
        <div className="general">
          <h2>
            {this.props.general.firstName} {this.props.general.lastName}
          </h2>
          <h4>{this.props.general.email}</h4>
          <h4>{this.props.general.phone}</h4>
          <h4>{this.props.general.linkedin}</h4>
        </div>

        <div className="main-section">
          <div className="summary">{this.props.summary}</div>
          <div className="education"></div>
          <div className="experience">exp</div>
        </div>
      </>
    );
  }
}
