import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home-page/Home";
import Contact from "./pages/contact/Contact";
import Experience from "./pages/experience/Experience";
import Projects from "./pages/projects/Projects";
import Resume from "./pages/resume/Resume";
import "./App.css";

function Layout() {
  return (
    <div className="main-container">
      <Navbar />
      <Outlet />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "contact", element: <Contact /> },
      { path: "experience", element: <Experience /> },
      { path: "projects", element: <Projects /> },
      { path: "resume", element: <Resume /> },
    ],
  },
]);
