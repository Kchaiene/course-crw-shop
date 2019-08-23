import React from 'react';
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




const Header = ({currentUser, hidden}) => {
    // On SIGN OUT
    const onClick = async e =>{
        try {
            await auth.signOut();
        }catch (e) {
            console.log("ERROR SIGN OUT", e);
        }
    };

    return (
        <HeaderContainer >

            <LogoContainer to='/'  >
                <Logo />
            </LogoContainer>
            <OptionsContainer >
                <OptionNavLink as='div' onClick={onClick}> FoRCE SIGN OUT!!!! </OptionNavLink>
                <OptionNavLink to='/shop'  >SHOP</OptionNavLink>
                <OptionNavLink to='/contact'  >CONTACT</OptionNavLink>

                { currentUser ?
                    (<OptionNavLink as='div' onClick={onClick}> SIGN OUT </OptionNavLink>)
                    : ( <OptionNavLink to='/signin' className='option' >SIGN IN</OptionNavLink>
                )}

                <CartIcon />
            </OptionsContainer>
            { hidden ? null : <CartDropdown/> }
        </HeaderContainer>
    );
};

Header.propTypes = {
  currentUser: PropTypes.object,
};

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);

