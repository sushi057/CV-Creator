import React, { Component } from "react";

export default class Experience extends Component {
  constructor() {
    super();

    this.state = {
      experience: {
        startYear: "",
        endYear: "",
        name: "",
        position: "",
      },
      expArray: [],
    };
  }

  handleChange = (e) => {
    const name = e.target.name;
    this.setState({
      experience: {
        [name]: e.target.value,
      },
    });
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    this.setState({
      expArray: this.state.expArray.concat(this.state.experience),
    });
  };

  render() {
    const { startYear, endYear, name, position } = this.state;

    return (
      <div className="experience-section">
        <h2>Experience</h2>
        <form onSubmit={this.onSubmitForm}>
          <label for="startyear">
            Start Year
            <input
              type="number"
              id="startyear"
              name="startYear"
              value={startYear}
              onChange={this.handleChange}
            />
          </label>
          <label for="endyear">
            End Year
            <input
              type="number"
              id="endyear"
              name="endYear"
              value={endYear}
              onChange={this.handleChange}
            />
          </label>
          <label for="name">
            Company
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label for="position">
            Position
            <input
              type="text"
              id="position"
              name="position"
              value={position}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
