import classes from "./Sidebars.module.css";
import { Row } from "reactstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { productsSliceActions } from "../redux/product";

const Sidebars = () => {
  let categories = useSelector((state: any) => state.products.categories);
  const dispatch = useDispatch();

  const inputchangeHandler = (event: any) => {
    event.preventDefault();
    let filter = event.target.checked;
    if (filter) {
      dispatch(productsSliceActions.addFilter(event.target.value));
    }else{
      dispatch(productsSliceActions.removeFilter(event.target.value));
    }
  };

  const priceFilterHandler = (event: any) => {
    event.preventDefault();
    let filter = event.target.checked;
    if (filter) {
      dispatch(productsSliceActions.addPriceFilter(event.target.value));
    }
    if (!filter) {
      dispatch(productsSliceActions.removePriceFilter());
    }
  };

  return (
    <Row className={classes.navbar}>
      <div className={classes.container}>
        <form className={classes.links}>
          <span>Category</span>
          {categories.map((cat: any) => (
            <li className={classes.navlink} key={Math.random()}>
              <input
                type="checkbox"
                value={cat}
                onChange={inputchangeHandler}
              />

              <label>{cat}</label>
            </li>
          ))}
          <br />
          <hr />
          <span>Price Range</span>
          <li className={classes.navlink}>
            <input type="radio" name="pricefilter" value="10" onChange={priceFilterHandler} />
            <label>Lower than $10</label>
          </li>
          <li className={classes.navlink}>
            <input type="radio" name="pricefilter" value="50" onChange={priceFilterHandler} />
            <label>Lower than $50</label>
          </li>
          <li className={classes.navlink}>
            <input type="radio" name="pricefilter" value="100" onChange={priceFilterHandler} />
            <label>Lower than $100</label>
          </li>
          <li className={classes.navlink}>
            <input type="radio" name="pricefilter" value="150" onChange={priceFilterHandler} />
            <label>Lower than $150</label>
          </li>
        </form>
      </div>
    </Row>
  );
};

export default Sidebars;
