import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './header.styles.scss';
import {connect} from 'react-redux';

import {auth} from '../../firebase/firebase.util';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({currentUser, hidden}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <img src={Logo} alt='logo'  className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser ?
        <div className="option" onClick={()=> auth.signOut()}> SIGN OUT </div>
        :
        <Link className="option" to='/signin'>SIGN IN</Link>
      }
      <CartIcon />
    </div>
    {
      hidden ? null : <CartDropdown />
    }
  </div>
);

const mapStateToProps = state => ({
  //because we used combinedReducer, that's why we are accessing the 'user' property before the currentUser
  //state.<userReducer>.currentUser
  currentUser: state.user.currentUser,
  hidden: state.cart.hidden
});

export default connect(mapStateToProps)(Header);
