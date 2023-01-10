import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Preview from "./components/Preview";
import Summary from "./components/Summary";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      editState: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      editState: !this.state.editState,
    });
    console.log(this.editState);
  };

  render() {
    const { editState } = this.state;

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
            <General />
            <Summary />
            <Education />
            <Experience />
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
