
/**/
import { cart,removeFromCart} from "./cart.js";
import { products } from "./products.js";
let cartSummaryHtml = '';

cart.forEach((cartItem)=>{
    const productId = cartItem.productId;
    let matchingProduct;
    products.forEach((product)=>{
        if (product.id === productId){
            matchingProduct = product;
        }
    });

    if (matchingProduct) {
        // Generate HTML for the matching product
        cartSummaryHtml += `
        <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
        <div class="delivery-date">
        Delivery date: Wednesday, June 15
        </div>

        <div class="cart-item-details-grid">
        <img class="product-image"
            src="${matchingProduct.img}">

            <div class="cart-item-details">
                <div class="product-name">
                ${matchingProduct.name}
                </div>
                <div class="product-price">
                $${matchingProduct.price}
                </div>
                <div class="product-quantity">
                <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                </span>
                <span class="update-quantity-link link-primary">
                    Update
                </span>
                <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
                    Delete
                </span>
                </div>
            </div>

        </div>
</div>

        `;
    } else {
        console.log(`Product with ID ${productId} not found in the products array.`);
    }
});


       
        

document.querySelector(".js-order-summary").innerHTML=cartSummaryHtml;

document.querySelectorAll('.js-delete-link').forEach((link)=> {
    link.addEventListener('click',(event)=>{
       
            const productId = link.dataset.productId;
       
           removeFromCart(productId);
            const container=document.querySelector(`.js-cart-item-container-${productId}`);
            container.remove();
    
        
 });
});

