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