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
          
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
