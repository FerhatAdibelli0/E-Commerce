import classes from "./Sidebars.module.css";
import { Row } from "reactstrap";

const Sidebars = () => {
  return (
    <Row className={classes.navbar}>
      <div className={classes.container}>
        <form className={classes.links}>
          <span>Category</span>
          <li className={classes.navlink}>
            <input type="checkbox" id="People" name="People" value="People" />
            <label>People</label>
          </li>
          <li className={classes.navlink}>
            <input
              type="checkbox"
              id="Premium"
              name="Premium"
              value="Premium"
            />
            <label>Premium</label>
          </li>
          <li className={classes.navlink}>
            <input type="checkbox" id="Pets" name="Pets" value="Pets" />
            <label>Pets</label>
          </li>
          <li className={classes.navlink}>
            <input type="checkbox" id="Food" name="Food" value="Food" />
            <label>Food</label>
          </li>
          <li className={classes.navlink}>
            <input
              type="checkbox"
              id="Landmarks"
              name="Landmarks"
              value="Landmarks"
            />
            <label>Landmarks</label>
          </li>
          <li className={classes.navlink}>
            <input type="checkbox" id="Cities" name="Cities" value="Cities" />
            <label>Cities</label>
          </li>
          <li className={classes.navlink}>
            <input type="checkbox" id="Nature" name="Nature" value="Nature" />
            <label>Nature</label>
          </li>
          <br />
          <hr />
          <span>Price Range</span>
          <li className={classes.navlink}>
            <input
              type="checkbox"
              id="smallerthan20"
              name="smallerthan20"
              value="smallerthan20"
            />
            <label>Lower than $20</label>
          </li>
          <li className={classes.navlink}>
            <input
              type="checkbox"
              id="between20100"
              name="between20100"
              value="between20100"
            />
            <label>$20 - $100</label>
          </li>
          <li className={classes.navlink}>
            <input
              type="checkbox"
              id="between100200"
              name="between100200"
              value="between100200"
            />
            <label>$100 - $200</label>
          </li>
          <li className={classes.navlink}>
            <input
              type="checkbox"
              id="bigger200"
              name="bigger200"
              value="bigger200"
            />
            <label>More than $200</label>
          </li>
        </form>
      </div>
    </Row>
  );
};

export default Sidebars;

{
  /* 
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
  <label for="vehicle2"> I have a car</label><br>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
  <label for="vehicle3"> I have a boat</label><br><br> */
}
