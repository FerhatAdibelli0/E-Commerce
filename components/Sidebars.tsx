import classes from "./Sidebars.module.css";
import { FormGroup, Input, Label, Row } from "reactstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { productsSliceActions } from "../redux/product";

const Sidebars = () => {
  let categories = useSelector((state: any) => state.products.categories);
  const dispatch = useDispatch();

  const inputchangeHandler = (event: any) => {
    let filter = event.target.checked;
    if (filter) {
      dispatch(productsSliceActions.addFilter(event.target.value));
    } else {
      dispatch(productsSliceActions.removeFilter(event.target.value));
    }
  };

  const priceFilterHandler = (event: any) => {
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
          <ul className={classes.subcontainer}>
            {categories.map((cat: any, index: any) => (
              <li className={classes.navlink} key={index}>
                <FormGroup check>
                  <Input
                    key={index}
                    type="checkbox"
                    value={cat}
                    id={"chk" + index}
                    name={cat}
                    onChange={inputchangeHandler}
                  />{" "}
                  <Label check htmlFor={"chk" + index}>
                    {cat}
                  </Label>
                </FormGroup>
              </li>
            ))}
          </ul>
          <br />
          <hr />
          <span>Price Range</span>
          <ul className={classes.subcontainer}>
            <li className={classes.navlink}>
              <input
                type="radio"
                name="pricefilter"
                value="10"
                onChange={priceFilterHandler}
                id="lower10"
              />
              <label htmlFor="lower10">Lower than $10</label>
            </li>
            <li className={classes.navlink}>
              <input
                type="radio"
                name="pricefilter"
                value="50"
                onChange={priceFilterHandler}
                id="lower50"
              />
              <label htmlFor="lower50">Lower than $50</label>
            </li>
            <li className={classes.navlink}>
              <input
                type="radio"
                name="pricefilter"
                value="100"
                id="lower100"
                onChange={priceFilterHandler}
              />
              <label htmlFor="lower100">Lower than $100</label>
            </li>
            <li className={classes.navlink}>
              <input
                type="radio"
                name="pricefilter"
                value="150"
                id="lower150"
                onChange={priceFilterHandler}
              />
              <label htmlFor="lower150">Lower than $150</label>
            </li>
          </ul>
        </form>
      </div>
    </Row>
  );
};

export default Sidebars;
