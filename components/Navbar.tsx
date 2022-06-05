import { Fragment } from "react";
import CartButton from "./CartButton";
import { useSelector } from "react-redux";
import classes from "./Navbar.module.css";
import Cart from "./Cart";

const Navbar = () => {
  const isShown = useSelector((state: any) => state.ui.isShown);
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
      {isShown ? <Cart /> : null}
    </Fragment>
  );
};

export default Navbar;
