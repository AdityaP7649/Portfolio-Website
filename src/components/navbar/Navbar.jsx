import { useState } from "react";
import {
  Menu,
  MenuItem,
  ProductItem,
} from "../../components/ui/navbar-menu";
import "./Navbar.css"

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="navbar-container">
      <Menu setActive={setActiveItem}>
        <MenuItem setActive={setActiveItem} active={activeItem} item="About">
          <ProductItem
            title="About"
            href="/" 
            src="https://images.unsplash.com/photo-1624822409300-77a55845dfff?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </MenuItem>
        <MenuItem setActive={setActiveItem} active={activeItem} item="Experience">
          <ProductItem
            title="Experience"
            description=""
            href="/experience"
            src="/path-to-image-1.jpg"
          />
        </MenuItem>
        <MenuItem setActive={setActiveItem} active={activeItem} item="Projects">
          <ProductItem
            title="Projects"
            description=""
            href="/projects"
            src="/path-to-image-2.jpg"
          />
        </MenuItem>
        <MenuItem setActive={setActiveItem} active={activeItem} item="Resume">
          <ProductItem
            title="Resume"
            description=""
            href="/resume"
            src="/path-to-image-2.jpg"
          />
        </MenuItem>
        <MenuItem setActive={setActiveItem} active={activeItem} item="Contact">
          <ProductItem
            title="Contact"
            description=""
            href="/contact"
            src="/path-to-image-2.jpg"
          />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
