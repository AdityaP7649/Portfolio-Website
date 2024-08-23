import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home-page/Home";
import Experience from "./pages/experience/Experience";
import Projects from "./pages/projects/Projects";
import Skills from "./pages/skills/Skills";
import Resume from "./pages/resume/Resume";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Home />
      <Experience />
      <Projects />
      <Skills />
      <Resume />
    </div>
  );
}

export default App;
