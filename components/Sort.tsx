import { productsSliceActions } from "../redux/product";
import { useDispatch } from "react-redux";
import { BsArrowDownUp } from "react-icons/bs";
import classes from "./Sort.module.css";

const Sort = () => {
  const dispatch = useDispatch();
  const sortingHandler = (event: any) => {
    dispatch(productsSliceActions.sortby(event.target.value));
  };

  const sortTypeHandler = () => {
    dispatch(productsSliceActions.sorttype());
  };

  return (
    <nav className={classes.sort}>
      <h6 className={classes.title}>
        Photography / <span className="text-muted ">Premium Photos</span>{" "}
      </h6>
      <ul className={classes.sort_list}>
        <li className={classes.sort_list_items}>
          <BsArrowDownUp
            onClick={sortTypeHandler}
            style={{ cursor: "pointer", marginRight: "0.5rem" }}
          />
          <span>Sortby</span>
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
