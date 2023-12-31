import Navbar from "./components/navbar";
import About from "./components/about";
import Skills from "./components/skills";
import Achievements from "./components/achievements";
import Resume from "./components/resume";
import Experience from "./components/experience";
import Referals from "./components/referals";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Experience />
      <Skills />
      <Achievements />
      <Referals />
      <Resume />
    </div>
  );
}

export default App;
