import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { uiSliceActions } from "../redux/ui";
import { Fragment } from "react";
import { BsCart4 } from "react-icons/bs";



const CartButton = (props: any) => {
  const totalQuantity = useSelector((state: any) => state.cart.totalQuantity);

  const dispatch = useDispatch();

  const cartHandler = () => {
    dispatch(uiSliceActions.isShown());
  };

  return (
    <Fragment>
      <button className={classes.button} onClick={cartHandler}>
        <BsCart4 />
        <span className={classes.badge}>{totalQuantity}</span>
      </button>
    </Fragment>
  );
};

export default CartButton;
