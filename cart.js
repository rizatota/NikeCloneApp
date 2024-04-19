
export let cart=JSON.parse(localStorage.getItem('cart'));

if(!cart){
    cart=[];
}


function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));

}
export function addToCart(productId){
    let matchingItem = cart.find(cartItem => cartItem.productId === productId);

    if (matchingItem){
        matchingItem.quantity += 1;
    } else {
        // Add the new product directly to the cart array
        cart.push({
            productId: productId,
            quantity: 1
        });
    }
    saveToStorage();
    console.log(cart);
}


export function removeFromCart(productId){
    const newCart = [];
    cart.forEach((cartItem)=>{
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    });
    cart = newCart;
    saveToStorage();
}

