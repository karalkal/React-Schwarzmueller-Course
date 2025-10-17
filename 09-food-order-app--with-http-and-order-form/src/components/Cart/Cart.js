import { useContext, useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';

const ORDERS_URL = "https://react-food-order-app-79c6b-default-rtdb.europe-west1.firebasedatabase.app/orders.json";

const Cart = (props) => {
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${Math.abs(cartCtx.totalAmount).toFixed(2)}`;         // after a add/remove operation updates displays $-0.00 
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const enableCheckoutHandler = () => {
        setIsCheckout(true);
    };


    async function submitOrderHandler(userData) {
        console.log(userData, cartCtx.items);
        setIsSubmitting(true);
        try {
            const requestConfig = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user: userData,
                    order: cartCtx.items
                })
            }
            const response = await fetch(ORDERS_URL, requestConfig)
            const json = await response.json()
            if (response.ok) {
                console.log(json);  // normally will give the user some feedback if order created
            } else {
                console.log(response);
            }
        } catch (error) {
            throw new Error(error.message);
        }
        setIsSubmitting(false);
        setHasSubmitted(true);

        cartCtx.resetCart(); // reset context, not component
    }

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );

    const modalActions = (
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>
                Close
            </button>
            {hasItems && (
                <button className={classes.button} onClick={enableCheckoutHandler}>
                    Order
                </button>
            )}
        </div>
    );

    const cartModalContent =
        <>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onCancel={props.onClose} onSubmitOrder={submitOrderHandler} />}
            {!isCheckout && modalActions}
        </>

    return (
        <Modal onClose={props.onClose}>
            {!isSubmitting && !hasSubmitted && cartModalContent}
            {isSubmitting && <>
                <p>Sending data to backend...</p>
                <div className={classes.actions}>
                    <button className={classes.button} onClick={props.onClose}>
                        Close
                    </button>
                </div>
            </>}
            {hasSubmitted && !isSubmitting && <>
                <p>Order received</p>
                <div className={classes.actions}>
                    <button className={classes.button} onClick={props.onClose}>
                        Close
                    </button>
                </div>
            </>}
        </Modal>
    );
};

export default Cart;