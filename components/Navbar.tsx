import { Fragment } from "react";
import CartButton from "./CartButton";
import classes from "./Navbar.module.css";
import Sort from "./Sort";

const Navbar = () => {
  return (
    <Fragment>
      <nav className={classes.navbar}>
        <h6 className={classes.logo}>Bejamas</h6>
        <ul className={classes.links}>
          <li className={classes.navlink}>
            <CartButton />
          </li>
        </ul>
      </nav>
      <Sort />
    </Fragment>
  );
};

export default Navbar;
