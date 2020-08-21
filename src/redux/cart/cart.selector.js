import {createSelector} from 'reselect';

//a piece of the redux state
const selectCart = state => state.cart; //this passes the state in here and then we'll get the cart object back

export const selectCartItems = createSelector(
    [selectCart], //collection of input selectors
    (cart) => cart.cartItems //this is a function that will return the value we want out of this selector
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((acc, cartItem) => (acc + cartItem.quantity), 0)
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart)=> cart.hidden
)