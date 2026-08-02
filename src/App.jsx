import { Routes, Route } from "react-router-dom";
import { FloatingDock } from "./components/ui/floating-dock";
import { Home, Briefcase, Code, Wrench, Zap } from "lucide-react";
import About from "./pages/about/About";
import Experience from "./pages/experience/Experience";
import Projects from "./pages/projects/Projects";
import Skills from "./pages/skills/Skills";
import Impact from "./pages/impact/Impact";
import NotFound from "./pages/not-found/NotFound";
import "./App.css";

const navItems = [
  { title: "About", icon: <Home className="w-full h-full" />, href: "/" },
  { title: "Experience", icon: <Briefcase className="w-full h-full" />, href: "/experience" },
  { title: "Projects", icon: <Code className="w-full h-full" />, href: "/projects" },
  { title: "Skills", icon: <Wrench className="w-full h-full" />, href: "/skills" },
  { title: "Impact", icon: <Zap className="w-full h-full" />, href: "/impact" },
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
          <Route path="/impact" element={<Impact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <FloatingDock items={navItems} />
    </div>
  );
}

export default App;
