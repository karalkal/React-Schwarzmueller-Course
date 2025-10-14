import { useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../store/cart-context';

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const ctx = useContext(CartContext)

  function addToCartHandler(amount) {
    const item = {
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    }

    ctx.addItem(item)
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      {/* need id to assign quantity form to relevant item */}
      <div><MealItemForm id={props.id} onAddToCart={addToCartHandler} /></div>
    </li>
  );
};

export default MealItem;
