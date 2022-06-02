import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartSliceActions } from "../redux/cart";

const Cart = (props: any) => {
  const items = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();

  const clearDataHandler = () => {
    dispatch(cartSliceActions.clearAllCart());
  };

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.length > 0 ? (
          items.map((fun: any) => (
            <CartItem
              key={fun.id}
              item={{
                id: fun.id,
                title: fun.name,
                quantity: fun.quantity,
                total: fun.totalprice,
                price: fun.price,
              }}
            />
          ))
        ) : (
          <h4>No found product in cart</h4>
        )}
      </ul>
      <button onClick={clearDataHandler}>Clear All</button>
    </Card>
  );
};

export default Cart;
