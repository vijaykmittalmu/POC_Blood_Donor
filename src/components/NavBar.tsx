import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navigation-bar">
      <section className="left-section">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/donors">Donors</NavLink>
        <NavLink to="/search-donors">Find Donor</NavLink>
        <NavLink to="/contact-us">Contact us</NavLink>
        <NavLink to="/auth/login">Login</NavLink>
      </section>
    </nav>
  );
};

export { NavBar };
