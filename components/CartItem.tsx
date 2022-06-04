import classes from "./CartItem.module.css";

const CartItem = (props: any) => {
  const { price, image, name, id } = props.item;

  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${price.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          <img src={image} alt={name} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
