import logo from "../../assets/logo/LogoCampers.svg";
import clsx from "clsx";
import css from "../Navbar/Navbar.module.css";
import { Link, NavLink } from "react-router-dom";

const getNavLinkActive = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navbar() {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src={logo} width="136px" height="16px" />
        </Link>
        <ul>
          <li>
            <NavLink to="/" className={getNavLinkActive}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalog" className={getNavLinkActive}>
              Catalog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
