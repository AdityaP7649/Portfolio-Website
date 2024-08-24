import { useState } from "react";
import { Menu, MenuItem, ProductItem } from "../../components/ui/navbar-menu";
import About from "../../assets/navbar-images/about.png"
import Project from "../../assets/navbar-images/project.png"

import "./Navbar.css";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="navbar-container">
      <Menu setActive={setActiveItem}>
        <MenuItem setActive={setActiveItem} active={activeItem} item="About">
          <ProductItem
            title="About"
            href="#about-me"
            src={About}
          />
        </MenuItem>
        <MenuItem
          setActive={setActiveItem}
          active={activeItem}
          item="Experience"
        >
          <ProductItem
            title="Experience"
            description=""
            href="#experience"
            src="/path-to-image-1.jpg"
          />
        </MenuItem>
        <MenuItem setActive={setActiveItem} active={activeItem} item="Projects">
          <ProductItem
            title="Projects"
            description=""
            href="#projects"
            src={Project}
          />
        </MenuItem>
        <MenuItem setActive={setActiveItem} active={activeItem} item="Skills">
          <ProductItem
            title="Skills"
            description=""
            href="#skills"
            src="/path-to-image-2.jpg"
          />
        </MenuItem>
        <MenuItem setActive={setActiveItem} active={activeItem} item="Resume">
          <ProductItem
            title="Resume"
            description=""
            href="#resume"
            src="/path-to-image-2.jpg"
          />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
