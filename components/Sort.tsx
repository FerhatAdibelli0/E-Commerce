import classes from "./Sort.module.css";
import { productsSliceActions } from "../redux/product";
import { useDispatch } from "react-redux";
import { BsArrowDownUp } from "react-icons/bs";

const Sort = () => {
  const dispatch = useDispatch();
  const sortingHandler = (event: any) => {
    dispatch(productsSliceActions.sortby(event.target.value));
  };

  const sortTypeHandler = (event: any) => {
    dispatch(productsSliceActions.sorttype());
  };

  return (
    <nav className={classes.navbar}>
      <h6 className={classes.logo}>Photography / Premium Photos</h6>
      <ul className={classes.links}>
        <li className={classes.navlink}>
          <span>Sortby</span>
          <BsArrowDownUp
            onClick={sortTypeHandler}
            style={{ cursor: "pointer",marginRight:"0.5rem" }}
          />
          <select onChange={sortingHandler} className="m-2 p-1">
            <option defaultChecked>price</option>
            <option>name</option>
          </select>
        </li>
      </ul>
    </nav>
  );
};

export default Sort;
