import React, {useContext, useState} from 'react';
import {ReactComponent as Logo} from '../../assets/4.4 crown.svg.svg';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createStructuredSelector} from 'reselect';
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import {selectCurrentUser} from "../../redux/user/userSelectors";
import {selectCartHidden} from "../../redux/cart/cartSelectors";
import {HeaderContainer, LogoContainer, OptionNavLink, OptionsContainer} from "./Header.styles";
import {signOutStart} from "../../redux/user/userActions";
import CurrentUserContext from "../../context/currentUser/currentUserContext";
import {CartContext} from "../../providers/cart/cartProvider";




const Header = props => {
     const { dispatch} = props;
    const currentUser = useContext(CurrentUserContext);
    const {hidden} = useContext(CartContext);

    const onSignOut = e =>{
       dispatch(signOutStart());
    };

    return (
        <HeaderContainer >

            <LogoContainer to='/'  >
                <Logo />
            </LogoContainer>
            <OptionsContainer >
                <OptionNavLink as='div' onClick={onSignOut}> FoRCE SIGN OUT!!!! </OptionNavLink>
                <OptionNavLink to='/shop'  >SHOP</OptionNavLink>
                <OptionNavLink to='/contact'  >CONTACT</OptionNavLink>

                { currentUser ?
                    (<OptionNavLink as='div' onClick={onSignOut}> SIGN OUT </OptionNavLink>)
                    : ( <OptionNavLink to='/signin' className='option' >SIGN IN</OptionNavLink>
                )}
                <CartIcon />
            </OptionsContainer>
            { hidden ? null : <CartDropdown/> }
        </HeaderContainer>
    );
};

// Header.propTypes = {
//   currentUser: PropTypes.object,
// };

const mapStateToProps = createStructuredSelector ({
  // currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);

