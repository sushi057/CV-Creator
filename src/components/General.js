import React, { Component } from "react";

export default class General extends Component {
  constructor() {
    super();

    this.state = {
      general: {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        linkedin: "",
      },
    };
  }
  handleChange = (e) => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
    console.log(e);
  };
  render() {
    const { firstName, lastName, phone, email, linkedin } = this.state;
    return (
      <div className="general-section">
        <label for="fname">
          First Name
          <input
            type="text"
            id="fname"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
          />
        </label>
        <label for="fname">
          Last Name
          <input
            type="text"
            id="lname"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
          />
        </label>
        <label for="fname">
          Email
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <label for="fname">
          Phone
          <input
            type="number"
            id="phone"
            name="phone"
            value={phone}
            onChange={this.handleChange}
          />
        </label>
        <label for="fname">
          Linkedin
          <input
            type="text"
            id="linkedin"
            name="linkedIn"
            value={linkedin}
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }
}
