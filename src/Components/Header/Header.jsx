import React from "react";
import { ReactComponent as Logo } from "../../Assets/crown.svg";
import { connect } from "react-redux";
import "./header.styles.scss";
import CartIcon from "../Cart-Icon/CartIcon";
import CartDropdown from "../Cart-Dropdown/CartDropdown";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../Redux/Cart/cartSelectors";
import { selectUserDetails } from "../../Redux/User/userSelector";
import {signOutStart} from "../../Redux/User/userActions"

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionDiv,
  OptionLink,
} from "./Header.styles";

const Header = ({ currentUser, toggleCart,signOutStart }) => (

  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>
      {currentUser ? (
        <OptionDiv onClick={signOutStart}>SIGN OUT</OptionDiv>
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
const mapDispatchToProps = dispatch => ({
  signOutStart : () => dispatch(signOutStart())
})
export default connect(mapStateToProps,mapDispatchToProps)(Header);
