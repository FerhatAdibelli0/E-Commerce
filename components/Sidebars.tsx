import Link from "next/link";
import classes from "./Sidebars.module.css";
import { Row } from "reactstrap";

const Navbar = () => {
  return (
    <Row className={classes.navbar}>
      <div className={classes.container}>
        <h6 className={classes.header}>Professional / Trends</h6>
        <ul className={classes.links}>
          <li className={classes.navlink}>
            <Link href="/cart">Pads</Link>
          </li>
          <li className={classes.navlink}>
            <Link href="/cart">Games</Link>
          </li>
          <li className={classes.navlink}>
            <Link href="/cart">Cart</Link>
          </li>
          <li className={classes.navlink}>
            <Link href="/cart">Cart</Link>
          </li>
          <li className={classes.navlink}>
            <Link href="/cart">Cart</Link>
          </li>
          <li className={classes.navlink}>
            <Link href="/cart">Cart</Link>
          </li>
          <br />
          <hr />
          <li className={classes.navlink}>
            <Link href="/cart">Cart</Link>
          </li>
          <li className={classes.navlink}>
            <Link href="/cart">Cart</Link>
          </li>
          <li className={classes.navlink}>
            <Link href="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </Row>
  );
};

export default Navbar;
