import React from 'react';

import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem'

const Cart = (props) => {

  const ctx = React.useContext(CartContext)
  function incrementItemHandler() { 
    console.log(ctx)
  }
  function decrementItemHandler() { }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {ctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onIncrement={incrementItemHandler}
          onDecrement={decrementItemHandler}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${ctx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button
          onClick={props.onHideCart}
          className={classes['button--alt']}>
          Close
        </button>
        {ctx.items.length > 0 && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
