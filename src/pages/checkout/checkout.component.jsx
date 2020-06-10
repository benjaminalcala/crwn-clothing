import React from 'react';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';

import CheckoutItem from '../../../src/components/checkout-item/checkout-item.component';
import StripeCheckout from '../../../src/components/stripe-button/stripe-button.component';


import './checkout.styles.scss';

import {selectCartTotal, selectCartItems} from '../../redux/cart/cart.selectors'


const CheckoutPage = ({total, cartItems}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block' >
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)}
        <div className='test-warning'>
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/30 - CVV: 123
        </div>
        <div className='total'>Total: ${total}</div>
        <StripeCheckout price={total}/>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);