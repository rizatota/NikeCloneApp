import {cart,addToCart} from './cart.js';
import { products } from './products.js';


function getProducts(){
let destinationContainerDisplay =document.querySelector('.destination-container');
let productHtml= '';

    products.forEach(category => {
        if (category.categoryName === "MainProducts") {
            category.items.forEach(product => {
    productHtml+= ` <div class="destination">
    <img src="${product.img}"  >
    <h5>${product.name}</h5>
    <p>$${product.price}</p>
    <span>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star-half"></i>
    </span>
    <button class="cartButton" data-body-id="${product.id}">Add to cart</button>
</div>
`;
        });
    }
});
destinationContainerDisplay.innerHTML=productHtml;};
 
function getKidsProducts(){
let kidsContainerDisplay =document.querySelector('.kids-container');
let kidsProductHtml= '';
products.forEach(category => {
    if (category.categoryName === "KidsProducts") {
        category.items.forEach(kidsProduct => {
    kidsProductHtml+= ` <div class="destination">
    <img src="${kidsProduct.img}"  >
    <h5>${kidsProduct.name}</h5>
    <p>$${kidsProduct.price}</p>
    <span>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star-half"></i>
    </span>
    <button class="cartButton" data-body-id="${kidsProduct.id}">Add to cart</button>
</div>
`;
});
}
});
kidsContainerDisplay.innerHTML=kidsProductHtml;};

function getAccessoriesProducts(){
let accessoriesContainerDisplay =document.querySelector('.accessories-container');
let accessoriesHtml= '';
products.forEach(category => {
    if (category.categoryName === "AccessoriesProducts") {
        category.items.forEach(accessoriesProduct => {
    accessoriesHtml+= ` <div class="destination">
    <img src="${accessoriesProduct.img}"  >
    <h5>${accessoriesProduct.name}</h5>
    <p>$${accessoriesProduct.price}</p>
    <span>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star-half"></i>
    </span>
    <button class="cartButton" data-body-id="${accessoriesProduct.id}">Add to cart</button>
</div>
`;
});
}
});
accessoriesContainerDisplay.innerHTML=accessoriesHtml;
};



function getShoesProducts(){
    let shoesContainerDisplay =document.querySelector('.shoes-container');
    let shoesHtml= '';
    products.forEach(category => {
        if (category.categoryName === "ShoesProducts") {
            category.items.forEach(shoesProduct => {
        shoesHtml+= ` <div class="destination">
        <img src="${shoesProduct.img}"  >
        <h5>${shoesProduct.name}</h5>
        <p>$${shoesProduct.price}</p>
        <span>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half"></i>
        </span>
        <button class="cartButton" data-body-id="${shoesProduct.id}">Add to cart</button>
    </div>
    `;
});
}
});
    shoesContainerDisplay.innerHTML=shoesHtml;
    };


 export function updateCartQuantity(){
    let cartQuantity = 0;
    cart.forEach((cartItem) =>{
        cartQuantity += cartItem.quantity;
    });
    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
    console.log(cartQuantity);
    
}
document.addEventListener('DOMContentLoaded', function () {
    // Function to handle adding products to cart
    function handleAddToCart(event) {
        if (event.target && event.target.classList.contains('cartButton')) {
            const productId = event.target.getAttribute('data-body-id');
            console.log(`Product ID ${productId} added to cart.`);
            addToCart(productId);
            updateCartQuantity();
        }
    }

    if (window.location.pathname.includes('index.html')) {
        getProducts();
        document.querySelector('.destination-container').addEventListener('click', handleAddToCart);
    } else if (window.location.pathname.includes('kids.html')) {
        getKidsProducts();
        document.querySelector('.kids-container').addEventListener('click', handleAddToCart);
    }
    else if (window.location.pathname.includes('accessories.html')) {
        getAccessoriesProducts();
        document.querySelector('.accessories-container').addEventListener('click', handleAddToCart);
    }
    else if (window.location.pathname.includes('shoes.html')) {
        getShoesProducts();
        document.querySelector('.shoes-container').addEventListener('click', handleAddToCart);
    }
   
  
});




   