const products=[
    {
        id:1,
        img: "images/sh1.png",
        name: "White t-shirt",
        price:55,
        
    },
    {
        id:2,
        img: "images/k5.png",
        name: "Black t-shirt",
        price:60,
        
    },
    {
        id:3,
        img: "images/a4.png",
        name: "Light Blue t-shirt",
        price:70,
        
    },
    {
        id:4,
        img: "images/k1.png",
        name: "Grey t-shirt",
        price:60,
        
    },
    {
        id:5,
        img: "images/a6.png",
        name: "Green t-shirt",
        price:65,
        
    },
    {
        id:6,
        img: "images/sh6.png",
        name: "Darkblue t-shirt",
        price:80,
        
    }
];
const kidsProducts=[
    {
        id:1,
        img: "images/k1.png",
        name: "White t-shirt",
        price:55,
        
    },
    {
        id:2,
        img: "images/k2.png",
        name: "Black t-shirt",
        price:60,
        
    },
    {
        id:3,
        img: "images/k.png",
        name: "Light Blue t-shirt",
        price:70,
        
    },
    {
        id:4,
        img: "images/k4.png",
        name: "Grey t-shirt",
        price:60,
        
    },
    {
        id:5,
        img: "images/k5.png",
        name: "Green t-shirt",
        price:65,
        
    },
    {
        id:6,
        img: "images/k6.png",
        name: "Darkblue t-shirt",
        price:80,
        
    }
];
const accessoriesProducts=[
    {
        id:1,
        img: "images/a1.png",
        name: "White t-shirt",
        price:55,
        
    },
    {
        id:2,
        img: "images/a2.png",
        name: "Black t-shirt",
        price:60,
        
    },
    {
        id:3,
        img: "images/a3.png",
        name: "Light Blue t-shirt",
        price:70,
        
    },
    {
        id:4,
        img: "images/a4.png",
        name: "Grey t-shirt",
        price:60,
        
    },
    {
        id:5,
        img: "images/a5.png",
        name: "Green t-shirt",
        price:65,
        
    },
    {
        id:6,
        img: "images/a6.png",
        name: "Darkblue t-shirt",
        price:80,
        
    }
];
const shoesProducts=[
    {
        id:1,
        img: "images/sh1.png",
        name: "White t-shirt",
        price:55,
        
    },
    {
        id:2,
        img: "images/sh2.png",
        name: "Black t-shirt",
        price:60,
        
    },
    {
        id:3,
        img: "images/sh3.png",
        name: "Light Blue t-shirt",
        price:70,
        
    },
    {
        id:4,
        img: "images/sh4.png",
        name: "Grey t-shirt",
        price:60,
        
    },
    {
        id:5,
        img: "images/sh5.jpg",
        name: "Green t-shirt",
        price:65,
        
    },
    {
        id:6,
        img: "images/sh6.png",
        name: "Darkblue t-shirt",
        price:80,
        
    }
];

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
    <button class="cartButton">Add to cart</button>
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
 

 