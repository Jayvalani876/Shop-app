import { ADD_TO_CART } from "../actions/cart";
import CartItem from "../../models/cart-item";

const initialState = {
    items: {},
    totalAmount: 0
};


export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const addedProduct = action.product;
            const prodPrice = addedProduct.price;
            const prodtitle = addedProduct.title;

            let updatedOrNewCartItem;

            if (state.items[addedProduct.id]) {
                // already have the item in cart
                updatedOrNewCartItem = new CartItem(
                    state.item[addedProduct.id].quantity + 1,
                    prodPrice,
                    prodtitle,
                    state.item[addedProduct.id].sum + prodPrice
                );
                return {
                    ...state,
                    items: { ...state.items, [addedProduct.id]: updatedCartItem }
                }
            }
            else {
                updatedOrNewCartItem = new CartItem(1, prodPrice, prodtitle, prodPrice);
                return {
                    ...state,
                    items: { ...state.items, [addedProduct.id]: updatedOrNewCartItem },
                    totalAmount: state.totalAmount + prodPrice
                };
            }
    }
    return state;
}
