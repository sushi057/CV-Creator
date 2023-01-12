import React, { Component } from "react";

export default class Preview extends Component {
  render() {
    return (
      <>
        <div className="general">
          <h2>
            {this.props.firstName} {this.props.lastName}
          </h2>
          <h4>{this.props.email}</h4>
          <h4>{this.props.phone}</h4>
        </div>

        <div className="main-section">
          <div className="summary">Lorem ipsum</div>
          <div className="education">edu</div>
          <div className="experience">exp</div>
        </div>
      </>
    );
  }
}
