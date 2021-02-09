export const addItemToCart = (cartItems,itemToBeAdded) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === itemToBeAdded.id);
    if(existingItem){
        return cartItems.map(cartItem => cartItem.id === itemToBeAdded.id ? {...cartItem ,quantity:cartItem.quantity + 1} : cartItem);
    }
    return [...cartItems,{...itemToBeAdded,quantity:1}];
}