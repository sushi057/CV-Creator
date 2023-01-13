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
          <h4>{this.props.linkedin}</h4>
        </div>

        <div className="main-section">
          <div className="summary">{this.props.summary}</div>
          <div className="education">
            <div className="education-years">
              {this.props.edu_startYear} - {this.props.edu_endYear}
            </div>
            <div className="college-level">
              {this.props.college}
              <br />
              {this.props.level}
            </div>
          </div>
          <div className="experience">
            <div className="experience-years">
              {this.props.exp_startYear} - {this.props.exp_lastYear}
            </div>
            <div className="company-position">
              {this.props.company}
              <br />
              {this.props.position}
            </div>
          </div>
        </div>
      </>
    );
  }
}
