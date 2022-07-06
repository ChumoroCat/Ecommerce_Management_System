import style from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

export default function MainNavigation(props) {
  return (
    <nav className={style.nav}>
      <header className={style.title}>E-Commerce Management System</header>
      <ul className={style.ul}>
        <NavLink
          className={(navData) => (navData.isActive ? style.active : "")}
          to="createsku"
        >
          Create SKU / Quick Purchase
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? style.active : "")}
          to="dashboard"
        >
          Finances / Inventory
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? style.active : "")}
          to="products"
        >
          Published Products
        </NavLink>
      </ul>
    </nav>
  );
}
