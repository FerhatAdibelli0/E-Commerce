import Link from "next/link";
import classes from "./Sort.module.css";
import { productsSliceActions } from "../redux/product";
import { useDispatch } from "react-redux";

const Sort = () => {
  const dispatch = useDispatch();
  const sortingHandler = (event: any) => {
    dispatch(productsSliceActions.sortby(event.target.value));
  };
  return (
    <nav className={classes.navbar}>
      <h6 className={classes.logo}>Photography / Premium Photos</h6>
      <ul className={classes.links}>
        <li className={classes.navlink}>
          <span>Sortby</span>
          <select onChange={sortingHandler}>
            <option defaultChecked>price</option>
            <option>name</option>
          </select>
        </li>
      </ul>
    </nav>
  );
};

export default Sort;
