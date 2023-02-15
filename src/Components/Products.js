import { NavLink, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <input className="search" type="search" placeholder="Search products" />
      <nav className="nav-2">
        <NavLink to="featured">FeaturedProducts</NavLink>
        <NavLink to="new">NewProducts</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Products;
