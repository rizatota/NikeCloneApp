export const cart =[
    {
        productId: 1,
        quantity:1
    },
    {
        productId: 2,
        quantity:3
    }
];
export function addToCart(productId){
    let matchingItem;
    cart.forEach((cartItem)=> {
        if (productId === cartItem.productId){
            matchingItem = cartItem;
        }
    });
    if (matchingItem){

        matchingItem.quantity +=1;
    }
    else{
        cart.push(
        {
            productId:  productId,
            quantity: 1,
        });
        console.log(cart);
    }
}