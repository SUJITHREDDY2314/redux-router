import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navstyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoraion: isActive ? "none" : "underline",
    };
  };
  return (
    <nav>
      <NavLink style={navstyles} to="/">
        Home
      </NavLink>
      <NavLink style={navstyles} to="/about">
        About
      </NavLink>
      <NavLink style={navstyles} to="/products">
        products
      </NavLink>
    </nav>
  );
};

export default Navbar;
