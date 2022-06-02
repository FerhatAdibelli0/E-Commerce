import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { uiSliceActions } from "../redux/ui";
import Cart from "./Cart";
import { Fragment } from "react";

const CartButton = (props: any) => {
  const totalQuantity = useSelector((state: any) => state.cart.totalQuantity);

  const dispatch = useDispatch();

  const cartHandler = () => {
    dispatch(uiSliceActions.isShown());
  };

  return (
    <Fragment>
      <button className={classes.button} onClick={cartHandler}>
        <span>My Cart</span>
        <span className={classes.badge}>{totalQuantity}</span>
      </button>
    </Fragment>
  );
};

export default CartButton;
