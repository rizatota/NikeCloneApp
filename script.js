import {cart} from './cart.js'
import { products } from './products.js';

getProducts();
 function getProducts(){
let destinationContainerDisplay =document.querySelector('.destination-container');
let productHtml= '';
products.forEach((product) =>{
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
destinationContainerDisplay.innerHTML=productHtml;};
 
 
function getKidsProducts(){
let kidsContainerDisplay =document.querySelector('.kids-container');
let kidsProductHtml= '';
kidsProducts.forEach((kidsProduct) =>{
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
    <button class="cartButton">Add to cart</button>
</div>
`;
});
kidsContainerDisplay.innerHTML=kidsProductHtml;};

function getAccessories(){
let accessoriesContainerDisplay =document.querySelector('.accessories-container');
let accessoriesHtml= '';
accessoriesProducts.forEach((accessoriesProduct) =>{
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
    <button class="cartButton">Add to cart</button>
</div>
`;
});
accessoriesContainerDisplay.innerHTML=accessoriesHtml;};

function getShoes(){
let shoesContainerDisplay =document.querySelector('.shoes-container');
let shoesHtml= '';
shoesProducts.forEach((shoesProduct) =>{
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
    <button class="cartButton">Add to cart</button>
</div>
`;
});
shoesContainerDisplay.innerHTML=shoesHtml;
console.log(shoesContainerDisplay)
};

 
    let iconCart = document.querySelector(".icon-cart");
    let body = document.querySelector("body");
    let closeCart = document.querySelector(".close");
    iconCart.addEventListener('click', () => {
        body.classList.toggle('showCart')
    });
    closeCart.addEventListener('click', () => {
        body.classList.toggle('showCart')
    });
 

    document.addEventListener('DOMContentLoaded', function () {
        document.querySelector('.destination-container').addEventListener('click', function (event) {
            if (event.target && event.target.classList.contains('cartButton')) {
                const productId = event.target.getAttribute('data-body-id');
                console.log(`Product ID ${productId} added to cart.`);
                let matchingItem;
                cart.forEach((item)=> {
                    if (productId === item.productId){
                        matchingItem = item;
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
                    let cartQuantity = 0;
                    cart.forEach((item) =>{
                        cartQuantity += item.quantity;
                    });
                    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
                    console.log(cartQuantity);
                    
                
         }
    });
    });
    