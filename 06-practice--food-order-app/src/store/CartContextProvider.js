import CartContext from "./cart-context"
import { useReducer } from 'react'

// default cart state
const defaultCartState = {
    items: [],
    totalAmount: 0,
}
// reducer - change state based on action.type
function cartReducer(state, action) {
    if (action.type === 'ADD_ITEM') {
        const updatedItems = [action.item, ...state.items]
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount   // expect item to have price and amount props
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        }
    };
    if (action.type === 'REMOVE_ITEM_BY_ID') {
        const foundItem = state.items.find(thingie => thingie.id === action.id)
        const updatedItems = state.items.filter(thingie => thingie.id !== foundItem.id)
        const updatedTotalAmount = state.totalAmount - foundItem.price * foundItem.amount   // expect item to have price and amount props
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        }
    };
    return defaultCartState;
}


export default function CartContextProvider(props) {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    // ctx functions
    function addItemToCartHandler(item) {
        dispatchCartAction({
            type: 'ADD_ITEM',
            item: item
        })
    };

    function removeItemFromCartHandler(id) {
        dispatchCartAction({
            type: 'REMOVE_ITEM_BY_ID',
            id: id
        })
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

