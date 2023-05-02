import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext)

  // get arr of all items, map each item to its quantity, sum numbers
  const numberOfItemsInCart = (ctx.items)
    .map(i => i.amount)
    .reduce((partialSum, a) => partialSum + a, 0)

  return (
    // onDisplayCart comes from App.js via Header.js
    <button className={classes.button} onClick={props.onDisplayCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItemsInCart}</span>
    </button>
  );
};

export default HeaderCartButton;
