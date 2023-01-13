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

  handleChange = (e) => {
    this.setState({
      editState: !this.state.editState,
    });
    console.log(this.editState);
  };

  render() {
    const { editState, general, summary, education, experience } = this.state;
    

    return (
      <>
        <h1>CV Cretaor</h1>
        {!editState && (
          <div>
            <Preview />
            <button type="button" onClick={this.handleChange}>
              Edit
            </button>
          </div>
        )}
        {editState && (
          <div>
            <div>
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
                <textarea value={summary} onChange={this.handleChange}></textarea>
              </div>
              <Education />
              <Experience />
            </div>
            <button type="button" onClick={this.handleChange}>
              Preview
            </button>
          </div>
        )}
      </>
    );
  }
}

export default App;
