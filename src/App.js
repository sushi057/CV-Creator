import { Component } from "react";
import Preview from "./components/Preview";
class App extends Component {
  constructor() {
    super();

    this.state = {
      editState: false,

      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      linkedin: "",
      summary: "",

      edu_startYear: "",
      edu_endYear: "",
      college: "",
      level: "",

      exp_startYear: "",
      exp_lastYear: "",
      company: "",
      position: "",
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
      [name]: e.target.value,
    });
  };

  onSubmitForm = (e) => {
    e.preventDefault();
  };

  render() {
    const {
      editState,
      firstName,
      lastName,
      phone,
      email,
      linkedin,
      summary,
      edu_startYear,
      edu_endYear,
      college,
      level,
      exp_startYear,
      exp_lastYear,
      company,
      position,
    } = this.state;

    return (
      <>
        <h1>CV Cretaor</h1>
        {!editState && (
          <div>
            <Preview
              firstName={firstName}
              lastName={lastName}
              phone={phone}
              email={email}
              linkedin={linkedin}
              summary={summary}
              edu_startYear={edu_startYear}
              edu_endYear={edu_endYear}
              college={college}
              level={level}
              exp_startYear={exp_startYear}
              exp_lastYear={exp_lastYear}
              company={company}
              position={position}
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
                      name="linkedin"
                      value={linkedin}
                      onChange={this.handleChange}
                    />
                  </label>
                </form>
              </div>

              <div className="summary-section">
                <h2>Summary</h2>
                <textarea
                  name="summary"
                  value={summary}
                  onChange={this.handleChange}
                ></textarea>
              </div>

              <div className="education-section">
                <h2>Education</h2>
                <label for="startyear">
                  Start Year
                  <input
                    type="number"
                    id="startyear"
                    name="edu_startYear"
                    value={edu_startYear}
                    onChange={this.handleChange}
                  />
                </label>
                <label for="endyear">
                  End Year
                  <input
                    type="number"
                    id="endyear"
                    name="edu_endYear"
                    value={edu_endYear}
                    onChange={this.handleChange}
                  />
                </label>
                <label for="name">
                  College
                  <input
                    type="text"
                    id="name"
                    name="college"
                    value={college}
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
              </div>

              <div className="experience-section">
                <h2>Experience</h2>
                <label for="startyear">
                  Start Year
                  <input
                    type="number"
                    id="startyear"
                    name="exp_startYear"
                    value={exp_startYear}
                    onChange={this.handleChange}
                  />
                </label>
                <label for="endyear">
                  End Year
                  <input
                    type="number"
                    id="endyear"
                    name="exp_lastYear"
                    value={exp_lastYear}
                    onChange={this.handleChange}
                  />
                </label>
                <label for="name">
                  Company
                  <input
                    type="text"
                    id="name"
                    name="company"
                    value={company}
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
              </div>

              <button type="submit" onClick={this.handleButtonClick}>
                Preview
              </button>
            </form>
          </div>
        )}
      </>
    );
  }
}

export default App;
