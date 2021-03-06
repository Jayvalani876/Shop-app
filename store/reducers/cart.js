import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";
import CartItem from "../../models/cart-item";

const initialState = {
    items: {},
    totalAmount: 0,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const addedProduct = action.product;
            const prodPrice = addedProduct.price;
            const prodtitle = addedProduct.title;

            let updatedOrNewCartItem = state.items[addedProduct.id];

            if(updatedOrNewCartItem) {
                updatedOrNewCartItem.quantity += 1;
            } else {
                updatedOrNewCartItem = new CartItem(1, prodPrice, prodtitle, prodPrice);
            }

            return {
                ...state,
                items: { ...state.items, [addedProduct.id]: updatedOrNewCartItem },
                totalAmount: state.totalAmount + prodPrice
            };

            // if (state.items[addedProduct.id]) {
            //     // already have the item in cart
            //     updatedOrNewCartItem = new CartItem(
            //         state.items[addedProduct.id].quantity,
            //         prodPrice,
            //         prodtitle,
            //         state.items[addedProduct.id].sum + prodPrice
            //     );
            //     // return {
            //     //     ...state,
            //     //     items: { ...state.items, [addedProduct.id]: updatedCartItem }
            //     // }
            // }
            // else {
               
            // }
        case REMOVE_FROM_CART:
            const selectedCartItem = state.items[action.pid];
            const currentQty = selectedCartItem.quantity;
            let updatedCartItems;
            if (currentQty > 1) {
                // need to reduce it, not erase it
                const updatedCartItem = new CartItem(
                    selectedCartItem.quantity - 1,
                    selectedCartItem.productPrice,
                    selectedCartItem.productTitle,
                    selectedCartItem.sum - selectedCartItem.productPrice
                );
                updatedCartItems = { ...state.items, [action.pid]: updatedCartItem };
            } else {
                updatedCartItems = { ...state.items };
                delete updatedCartItems[action.pid];
            }
            return {
                ...state,
                items: updatedCartItems,
                totalAmount: state.totalAmount - selectedCartItem.productPrice
            };
    }
    return state;
}