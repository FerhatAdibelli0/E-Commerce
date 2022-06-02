import Link from "next/link";
import { Fragment } from "react";
import classes from "./Navbar.module.css";
import Sort from "./Sort";

const Navbar = () => {
  return (
    <Fragment>
      <nav className={classes.navbar}>
        <h6 className={classes.logo}>Bejamas</h6>
        <ul className={classes.links}>
          <li className={classes.navlink}>
            <Link href="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
      <Sort />
    </Fragment>
  );
};

export default Navbar;
