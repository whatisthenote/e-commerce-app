import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";
import CartIcon from "../cart icon/CartIcon";
import Dropdown from "../cart dropdown/Dropdown";
import { getCurrentUser } from "../../redux/user/userSelector";
import { getHiddenState } from "../../redux/cart/cartSelectors";
import { createStructuredSelector } from "reselect";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "./HeaderStyles";
import { signOutSuccess } from "../../redux/user/userActions";

function Header({ getCurrentUser, getHiddenState, signOutSuccess }) {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {getCurrentUser ? (
          <OptionLink to="/" className="option" onClick={signOutSuccess}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {getHiddenState ? null : <Dropdown />}
    </HeaderContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  getCurrentUser,
  getHiddenState
});

const mapDispatchToProps = dispatch => ({
  signOutSuccess: () => dispatch(signOutSuccess())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
