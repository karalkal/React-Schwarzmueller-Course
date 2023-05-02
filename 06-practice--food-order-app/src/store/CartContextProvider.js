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
        let updatedItems = []
        let itemAlreadyInCart = state.items.find(thingie => thingie.id === action.item.id)

        // IF FOUND: increment amount of found item
        // NB Unexpected (for me) behaviour when incrementing itemAlreadyInCart.amount += action.item.amount
        // therefore create new obj instead...
        if (itemAlreadyInCart !== undefined) {
            let foundIdx = state.items.indexOf(itemAlreadyInCart)
            let updatedCartItem = {
                ...itemAlreadyInCart,
                amount: itemAlreadyInCart.amount + action.item.amount
            }
            // ... and create new array from old one with non-destructive splicing, i.e. [...slice1, replace, ...slice2]
            updatedItems = [
                ...state.items.slice(0, foundIdx),
                updatedCartItem,
                ...state.items.slice(foundIdx + 1)]
        }
        // if undefined just unshift (in non-destructive manner) item to array
        else {
            updatedItems = [action.item, ...state.items]
        }

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

