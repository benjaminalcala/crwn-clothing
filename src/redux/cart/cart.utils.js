export const addItemToCart = (existingCart, newCartItem) => {
    const existingCartItem = existingCart.find(cartItem => 
        cartItem.id === newCartItem.id
    )

    if(existingCartItem){
        return existingCart.map(cartItem => 
            cartItem.id === newCartItem.id
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
            
        )
    }

    return [...existingCart, {...newCartItem, quantity: 1}]

}

export const removeItemFromCart = (existingCart, itemToRemove) => {
    const existingCartItem = existingCart.find(cartItem => 
        cartItem.id === itemToRemove.id
    );

    if(existingCartItem.quantity === 1){
        return existingCart.filter(cartItem => cartItem.id !== itemToRemove.id)
    }

    return existingCart.map(cartItem => 
        cartItem.id === itemToRemove.id?
        {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
        )


}