import classes from './CartItem.module.css';

const CartItem = (props) => {
  // in this version I pass whole item obj as props so we can manipulate amount from this component
  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.item.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>${props.item.price.toFixed(2)}</span>
          <span className={classes.amount}>x {props.item.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={() => props.onDecrement(props.item.id)}>−</button>
        <button onClick={() => props.onIncrement(props.item)}>+</button>
        <button onClick={() => props.onRemove(props.item.id)}>x</button>
      </div>
    </li>
  );
};

export default CartItem;
