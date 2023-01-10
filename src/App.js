import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Preview from "./components/Preview";
import Summary from "./components/Summary";

function App() {
  return (
    <>
      <h1>CV Cretaor</h1>
      <Preview />
      <General />
      <Summary />
      <Education />
      <Experience />
    </>
  );
}

export default App;
