import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {auth} from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';

import {ReactComponent as Logo} from '../../assets/crown.svg';

const Header = ({currentUser, hidden}) => (
    <div className='header'>
    <Link className='logo-container' to='/'>
        <Logo className='logo'></Logo>
    </Link>
    <div className='options'>
        <Link className='option' to='/shop'>shop</Link>
        <Link className='option' to='/contacts'>contact</Link>
        {
            currentUser?
            (
                <div className='option' onClick={()=>auth.signOut()}>
                    sign out
                </div>
            )
            :
            (
                <Link className='option' to='/signin'>
                    sign in
                </Link>
            )
        }
        <CartIcon />
    </div>
    {hidden ? null: <CartDropdown/>}
    
    </div>
)

const mapStateToProps = ({user:{currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);