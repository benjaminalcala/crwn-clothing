import React from 'react';
import {connect} from 'react-redux';

import {clearItemFromCart, removeItemFromCart, addItem} from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';


const CheckoutItem = ({cartItem, clearCart, removeItem, addItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return (    
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <div className='quantity'>
                <div className='arrow' onClick={()=> removeItem(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={()=> addItem(cartItem)}>&#10095;</div>
            </div>
            
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={()=> clearCart(cartItem)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearCart: item => dispatch(clearItemFromCart(item)),
    removeItem: item => dispatch(removeItemFromCart(item)),
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);