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
        hobby: {
          hob1: "",
          hob2: "",
          hob3: "",
          hob4: "",
        },
      },
    };
  }
  handleChange = (e) => {
    this.setState({});
  };
  render() {
    const { firstName, lastName, phone, email, hobby } = this.state;
    return (
      <>
        <label for="fname">
          First Name
          <input
            type="text"
            id="fname"
            value={firstName}
            onChange={this.handleChange}
          />
        </label>
        <label for="fname">
          Last Name
          <input
            type="text"
            id="lname"
            value={lastName}
            onChange={this.handleChange}
          />
        </label>
        <label for="fname">
          Email
          <input
            type="email"
            id="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <label for="fname">
          Phone
          <input
            type="number"
            id="phone"
            value={phone}
            onChange={this.handleChange}
          />
        </label>
      </>
    );
  }
}
