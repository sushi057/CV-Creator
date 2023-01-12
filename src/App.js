import { Component } from "react";
import Input from "./components/Input";
import Preview from "./components/Preview";
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
    const general = { firstName, lastName, email, phone };

    return (
      <>
        <h1>CV Cretaor</h1>
        {!editState && (
          <div>
            <Preview general={general} />
            <button type="button" onClick={this.handleChange}>
              Edit
            </button>
          </div>
        )}
        {editState && (
          <div>
            <Input />
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
