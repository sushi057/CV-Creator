import React, { Component } from "react";
import Education from "./Education";
import Experience from "./Experience";
import Preview from "./Preview";

export default class Input extends Component {
  render() {
    return (
      <div>
        <div className="general-section">
          <form onSubmit={this.onSubmitForm}>
            <label for="fname">
              First Name
              <input
                type="text"
                id="fname"
                name="firstName"
                // value={firstName}
                onChange={this.handleChange}
              />
            </label>
            <label for="lname">
              Last Name
              <input
                type="text"
                id="lname"
                name="lastName"
                // value={lastName}
                onChange={this.handleChange}
              />
            </label>
            <label for="email">
              Email
              <input
                type="email"
                id="email"
                name="email"
                // value={email}
                onChange={this.handleChange}
              />
            </label>
            <label for="phone">
              Phone
              <input
                type="number"
                id="phone"
                name="phone"
                // value={phone}
                onChange={this.handleChange}
              />
            </label>
            <label for="linkedin">
              Linkedin
              <input
                type="text"
                id="linkedin"
                name="linkedIn"
                // value={linkedin}
                onChange={this.handleChange}
              />
            </label>
          </form>
        </div>
        <div className="summary-section">
          <h2>Summary</h2>
          <textarea onChange={this.handleChange}></textarea>
        </div>
        <Education />
        <Experience />
        <Preview />
      </div>
    );
  }
}
