import classes from "./CartItem.module.css";

const CartItem = (props: any) => {
  const { price, image, name } = props.item;
  console.log(image);
  return (
    <li className={classes.item}>
      <div className={classes.details}>
        <div className={classes.quantity}>
          <img src={image.src} alt={name} />
        </div>
        <h3>{name}</h3>${price.toFixed(2)}{" "}
        <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
      </div>
      {/* <header>
        <div className={classes.price}></div>
      </header> */}
    </li>
  );
};

export default CartItem;
