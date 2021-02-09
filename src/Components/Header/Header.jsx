import React from 'react';
import {ReactComponent as Logo} from '../../Assets/crown.svg';
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import './header.styles.scss';
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../Cart-Icon/CartIcon";
import CartDropdown from "../Cart-Dropdown/CartDropdown";
const Header = ({currentUser,toggleCart}) => (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
        <CartIcon/>
      </div>
      {toggleCart?null:<CartDropdown/>}
      
    </div>
  );

const mapStateToProps = ({user:{currentUser},cart:{hiddenCart}}) =>({
    currentUser:currentUser,
    toggleCart:hiddenCart
})

export default connect(mapStateToProps)(Header);
