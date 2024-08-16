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
            title="Home"
            description="This is a description for product 1."
            href="/product-1"
            src="/path-to-image-1.jpg"
          />
        </MenuItem>
        <MenuItem setActive={setActiveItem} active={activeItem} item="Experience">
          <ProductItem
            title="Home"
            description="This is a description for product 1."
            href="/product-1"
            src="/path-to-image-1.jpg"
          />
        </MenuItem>
        <MenuItem setActive={setActiveItem} active={activeItem} item="Projects">
          <ProductItem
            title="Product 2"
            description="This is a description for product 2."
            href="/product-3"
            src="/path-to-image-2.jpg"
          />
        </MenuItem>
        <MenuItem setActive={setActiveItem} active={activeItem} item="Resume">
          <ProductItem
            title="Product 2"
            description="This is a description for product 2."
            href="/product-2"
            src="/path-to-image-2.jpg"
          />
        </MenuItem>
        <MenuItem setActive={setActiveItem} active={activeItem} item="Contact">
          <ProductItem
            title="Product 2"
            description="This is a description for product 2."
            href="/product-3"
            src="/path-to-image-2.jpg"
          />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
