import { Component } from "react";
import Preview from "./components/Preview";
import Education from "./components/Education";
import Experience from "./components/Experience";
class App extends Component {
  constructor() {
    super();

    this.state = {
      editState: false,
      general: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        linkedin: "",
      },
      summary: "",
      education: {
        startYear: "",
        endYear: "",
        college: "",
        level: "",
      },
      experience: {
        startYear: "",
        lastYear: "",
        company: "",
        position: "",
      },
    };
  }

  handleButtonClick = (e) => {
    this.setState({
      editState: !this.state.editState,
    });
    console.log(this.editState);
  };

  handleChange = (e) => {
    const name = e.target.name;
    this.setState({
      general: {
        [name]: e.target.value,
      },
    });
  };

  onSubmitForm = (e) => {
    e.preventDefault();
  };

  render() {
    const { editState, general, summary, education, experience } = this.state;

    return (
      <>
        <h1>CV Cretaor</h1>
        {!editState && (
          <div>
            <Preview
              general={general}
              summary={summary}
              education={education}
              experience={experience}
            />
            <button type="button" onClick={this.handleButtonClick}>
              Edit
            </button>
          </div>
        )}
        {editState && (
          <div>
            <form onSubmit={this.onSubmitForm}>
              <div className="general-section">
                <form onSubmit={this.onSubmitForm}>
                  <label for="fname">
                    First Name
                    <input
                      type="text"
                      id="fname"
                      name="firstName"
                      value={general.firstName}
                      onChange={this.handleChange}
                    />
                  </label>
                  <label for="lname">
                    Last Name
                    <input
                      type="text"
                      id="lname"
                      name="lastName"
                      value={general.lastName}
                      onChange={this.handleChange}
                    />
                  </label>
                  <label for="email">
                    Email
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={general.email}
                      onChange={this.handleChange}
                    />
                  </label>
                  <label for="phone">
                    Phone
                    <input
                      type="number"
                      id="phone"
                      name="phone"
                      value={general.phone}
                      onChange={this.handleChange}
                    />
                  </label>
                  <label for="linkedin">
                    Linkedin
                    <input
                      type="text"
                      id="linkedin"
                      name="linkedIn"
                      value={general.linkedin}
                      onChange={this.handleChange}
                    />
                  </label>
                </form>
              </div>
              <div className="summary-section">
                <h2>Summary</h2>
                <textarea
                  value={summary}
                  onChange={this.handleChange}
                ></textarea>
              </div>
              <div className="eductaion-section">
                <h2>Education</h2>
                <label for="startyear">
                  Start Year
                  <input
                    type="number"
                    id="startyear"
                    name="startYear"
                    value={education.startYear}
                    onChange={this.handleChange}
                  />
                </label>
                <label for="endyear">
                  End Year
                  <input
                    type="number"
                    id="endyear"
                    name="endYear"
                    value={education.endYear}
                    onChange={this.handleChange}
                  />
                </label>
                <label for="name">
                  College
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={education.college}
                    onChange={this.handleChange}
                  />
                </label>
                <label for="level">
                  Level
                  <input
                    type="text"
                    id="level"
                    name="level"
                    value={education.level}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div className="experience-section">
                <h2>Experience</h2>
                <label for="startyear">
                  Start Year
                  <input
                    type="number"
                    id="startyear"
                    name="startYear"
                    value={experience.startYear}
                    onChange={this.handleChange}
                  />
                </label>
                <label for="endyear">
                  End Year
                  <input
                    type="number"
                    id="endyear"
                    name="endYear"
                    value={experience.endYear}
                    onChange={this.handleChange}
                  />
                </label>
                <label for="name">
                  Company
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={experience.company}
                    onChange={this.handleChange}
                  />
                </label>
                <label for="position">
                  Position
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={experience.position}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
            </form>
            <button type="submit" onClick={this.handleButtonClick}>
              Preview
            </button>
          </div>
        )}
      </>
    );
  }
}

export default App;
