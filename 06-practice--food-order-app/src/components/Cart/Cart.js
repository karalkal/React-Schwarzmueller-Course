import React from 'react';

import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import cartContext from '../../store/cart-context';

const Cart = (props) => {

  const ctx = React.useContext(cartContext)
  console.log(ctx)

  const cartItems = (
    <ul className={classes['cart-items']}>
      {ctx.items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{ctx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button
          onClick={props.onHideCart}
          className={classes['button--alt']}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
