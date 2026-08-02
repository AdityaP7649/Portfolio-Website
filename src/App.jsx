import { Routes, Route } from "react-router-dom";
import { FloatingDock } from "./components/ui/floating-dock";
import { Home, Briefcase, Code, Wrench, Award } from "lucide-react";
import About from "./pages/about/About";
import Experience from "./pages/experience/Experience";
import Projects from "./pages/projects/Projects";
import Skills from "./pages/skills/Skills";
import Achievements from "./pages/achievements/Achievements";
import NotFound from "./pages/not-found/NotFound";
import "./App.css";

const navItems = [
  { title: "About", icon: <Home className="w-full h-full" />, href: "/" },
  { title: "Experience", icon: <Briefcase className="w-full h-full" />, href: "/experience" },
  { title: "Projects", icon: <Code className="w-full h-full" />, href: "/projects" },
  { title: "Skills", icon: <Wrench className="w-full h-full" />, href: "/skills" },
  { title: "Achievements", icon: <Award className="w-full h-full" />, href: "/achievements" },
];

function App() {
  return (
    <div className="main-container">
      <main className="main-content">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <FloatingDock items={navItems} />
    </div>
  );
}

export default App;
