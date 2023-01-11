import React, { Component } from "react";

export default class Summary extends Component {
  constructor() {
    super();

    this.state = {
      value: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  render() {
    const { value } = this.state;
    return (
      <div className="summary-section">
        <h2>Summary</h2>
        <textarea value={value} onChange={this.handleChange}></textarea>
      </div>
    );
  }
}
