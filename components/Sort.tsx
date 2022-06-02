import Link from "next/link";
import classes from "./Sort.module.css";

const Sort = () => {
  //   const history = useHistory();
  //   const location = useLocation();
  //   const queryParams = new URLSearchParams(location.search);
  //   const sortingAscending = queryParams.get("sort") === "asc";

  const sortingHandler = () => {
    // history.push({
    //   pathname: location.pathname,
    //   search: `?sort=${sortingAscending ? "des" : "asc"}`,
    // });
  };

  return (
    <nav className={classes.navbar}>
      <h6 className={classes.logo}>Photography / Premium Photos</h6>
      <ul className={classes.links}>
        <li className={classes.navlink}>
          <span onClick={sortingHandler}>
            {/* Sort{sortingAscending ? "Descending" : "Ascending"} */}
            Sortby
          </span>
          <select>
            <option defaultChecked>Price</option>
            <option>Alfabetic</option>
          </select>
        </li>
      </ul>
    </nav>
  );
};

export default Sort;
