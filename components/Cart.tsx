import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartSliceActions } from "../redux/cart";
import { uiSliceActions } from "../redux/ui";

const Cart = (props: any) => {
  const items = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();
  console.log(items);

  const clearDataHandler = () => {
    dispatch(cartSliceActions.clearAllCart());
    dispatch(uiSliceActions.isShown());
  };

  const closeCartHandler = () => {
    dispatch(uiSliceActions.isShown());
  };

  return (
    <Card className={classes.cart}>
      <div className={classes.closer}>
        <span onClick={closeCartHandler}>X</span>
      </div>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.length > 0 ? (
          items.map((fun: any, index: any) => (
            <CartItem
              key={index}
              item={{
                name: fun.name,
                image: fun.image,
                price: fun.price,
              }}
            />
          ))
        ) : (
          <h4 className="text-center">No found product</h4>
        )}
      </ul>
      <div className={classes.button}>
        {" "}
        <button onClick={clearDataHandler}>Clear All</button>
      </div>
    </Card>
  );
};

export default Cart;
