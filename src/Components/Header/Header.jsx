import React from "react";
import { ReactComponent as Logo } from "../../Assets/crown.svg";
import { connect } from "react-redux";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../Cart-Icon/CartIcon";
import CartDropdown from "../Cart-Dropdown/CartDropdown";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../Redux/Cart/cartSelectors";
import { selectUserDetails } from "../../Redux/User/userSelector";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionDiv,
  OptionLink,
} from "./Header.styles";

const Header = ({ currentUser, toggleCart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>
      {currentUser ? (
        <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {toggleCart ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectUserDetails,
  toggleCart: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
