import Link from "next/link";
import classes from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <h6 className={classes.logo}>Bejamas</h6>
      <ul className={classes.links}>
        <li className={classes.navlink}>
          <Link href="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
