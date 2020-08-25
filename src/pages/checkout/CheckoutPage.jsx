import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// import './CheckoutPage.scss';
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
} from "./CheckoutPage.styles";

import {
  selectCartTotal,
  selectCartItems,
} from "../../redux/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer>TOTAL: ${total}</TotalContainer>
    <WarningContainer>
      *Use the following test credit card for payment*
      <br />
      4242 4242 4242 4242 - Exp: 01/21 - CVC: 123
    </WarningContainer>
    <StripeCheckoutButton price={total} />
  </CheckoutPageContainer>
  // <div className="checkout-page">
  //     <div className="checkout-header">
  //         <div className="header-block">
  //             <span>Product</span>
  //         </div>
  //         <div className="header-block">
  //             <span>Description</span>
  //         </div>
  //         <div className="header-block">
  //             <span>Quantity</span>
  //         </div>
  //         <div className="header-block">
  //             <span>Price</span>
  //         </div>
  //         <div className="header-block">
  //             <span>Remove</span>
  //         </div>
  //     </div>
  //     {
  //         cartItems.map(cartItem =>
  //             <CheckoutItem key={cartItem.id} cartItem={cartItem} />
  //         )
  //     }
  //     <div className="total">TOTAL: ${total}</div>
  //     <div className="test-warning">
  //         *Use the following test credit card for payment*<br/>
  //         4242 4242 4242 4242 - Exp: 01/21 - CVC: 123
  //     </div>
  //     <StripeCheckoutButton price={total} />
  // </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
