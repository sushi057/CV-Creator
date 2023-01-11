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

  onSubmitForm = (e) => {
    e.preventDefault();
  };
  render() {
    const { firstName, lastName, phone, email, linkedin } = this.state;
    return (
      <div className="general-section">
        <form onSubmit={this.onSubmitForm}>
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
          <label for="lname">
            Last Name
            <input
              type="text"
              id="lname"
              name="lastName"
              value={lastName}
              onChange={this.handleChange}
            />
          </label>
          <label for="email">
            Email
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label for="phone">
            Phone
            <input
              type="number"
              id="phone"
              name="phone"
              value={phone}
              onChange={this.handleChange}
            />
          </label>
          <label for="linkedin">
            Linkedin
            <input
              type="text"
              id="linkedin"
              name="linkedIn"
              value={linkedin}
              onChange={this.handleChange}
            />
          </label>
        </form>
      </div>
    );
  }
}
