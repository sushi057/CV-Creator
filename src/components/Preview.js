import React, { Component } from "react";

export default class Preview extends Component {
  render() {
    return (
      <>
        <div className="general">
          <h2>John Doe</h2>
          <h4>Email:</h4>
          <h4>Phone:</h4>
          <h4>Hobbies</h4>
          <ul>
            <li>Books</li>
            <li>Music</li>
            <li>Gaming</li>
            <li>Travel</li>
          </ul>
        </div>

        <div className="main-section">
          <div className="summary">Lorem Ipsum</div>
          <div className="education">edu</div>
          <div className="experience">exp</div>
        </div>
      </>
    );
  }
}
