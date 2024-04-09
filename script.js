const products=[
    {
        id:1,
        img: "images/whitetshirt.jpeg",
        name: "White t-shirt",
        price:55,
        
    },
    {
        id:2,
        img: "images/blacktshirt.jpeg",
        name: "Black t-shirt",
        price:60,
        
    },
    {
        id:3,
        img: "images/lightblue.jpeg",
        name: "Light Blue t-shirt",
        price:70,
        
    },
    {
        id:4,
        img: "images/greytshirt.jpeg",
        name: "Grey t-shirt",
        price:60,
        
    },
    {
        id:5,
        img: "images/green.jpeg",
        name: "Green t-shirt",
        price:65,
        
    },
    {
        id:6,
        img: "images/darkblue.jpeg",
        name: "Darkblue t-shirt",
        price:80,
        
    }
]
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
destinationContainerDisplay.innerHTML=productHtml;


