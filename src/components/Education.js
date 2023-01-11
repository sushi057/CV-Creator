import React, { Component } from "react";

export default class Education extends Component {
  constructor() {
    super();

    this.state = {
      education: {
        startYear: "",
        endYear: "",
        name: "",
        level: "",
      },
      eduArray: [],
    };
  }

  handleChange = (e) => {
    const name = e.target.name;
    this.setState({
      education: {
        [name]: e.target.value,
      },
    });
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    this.setState({
      eduArray: this.state.eduArray.concat(this.state.education),
    });
  };

  render() {
    const { startYear, endYear, name, level } = this.state;

    return (
      <div className="education-section">
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
            College
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label for="level">
            Level
            <input
              type="text"
              id="level"
              name="level"
              value={level}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
