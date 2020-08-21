import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './cart-icon.styles.scss';

//make the svg image into a component
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selector'


const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className="cart-icon">
        <ShoppingIcon className="shopping-icon" onClick={toggleCartHidden} />
        <span className="item-count">{itemCount}</span>
    </div>
);

// const mapStateToProps = ({ cart: { cartItems }}) => {
//     console.log("I am being called!");
//     return({
//         itemCount: cartItems.reduce((acc, cartItem) => (acc + cartItem.quantity), 0)
// })}

// const mapStateToProps = (state)=> {
//     console.log("I am being called!");
//     return({
//     itemCount: selectCartItemsCount(state)
// })}

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
