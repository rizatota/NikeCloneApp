import { cart,removeFromCart} from "./cart.js";
import { products } from "./products.js"; 

    let mainHtml='';
        cart.forEach((cartItem)=>{
        const productId=cartItem.productId; 
        let matchingProduct;
        products.forEach(category => {
          category.items.forEach(item => {


              if (item.id === productId){
                  matchingProduct = item;
        
        mainHtml+=`
            <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
                <div class="cart-item-details-grid">
                    <img class="product-image"
                    src="${matchingProduct.img}">
                <div class="cart-item-details">
                    <div class="product-name">
                    ${matchingProduct.name}
                    </div>
                    <div class="product-price" >
                    $${matchingProduct.price}
                    </div>
                  <div class="product-quantity">
                    <span>
                      Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                    </span> 
                    <span class="delete-quantity-link link-primary"   data-product-id="${matchingProduct.id}">
                      Delete
                    </span>
                  </div>
                </div>
               </div>
            </div>
        `;
          }
    });
  });
    
document.querySelector('.order-summary').innerHTML=mainHtml;
}); 

 
const payment=calculateTotalSum();
const paymentDisplay=document.querySelector('.payment-summary-money');
paymentDisplay.innerHTML=payment;


document.querySelectorAll(".delete-quantity-link").forEach((deleteLink)=>{
    deleteLink.addEventListener('click',function (event) {
        if (event.target) {
        const productId = event.target.getAttribute('data-product-id'); 
        removeFromCart(productId);
        const container=document.querySelector(`.js-cart-item-container-${productId}`);
        container.remove(); 
        updateTotalSum(); 
        }
});
});


export function calculateTotalSum() {
  let totalPrice = 0;
  cart.forEach((item) => {
      const productId = item.productId;
      const quantity = item.quantity;
      const matchingProduct = products.reduce((matchingProduct, category) => {
          const foundProduct = category.items.find(product => product.id === productId);
          return foundProduct ? foundProduct : matchingProduct;
      }, null);
      if (matchingProduct) {
          totalPrice += matchingProduct.price * quantity;
      }
  });
  return totalPrice;
}

 

 export function updateTotalSum() {
  const totalSum = calculateTotalSum();
  const totalSumDisplay = document.querySelector('.payment-summary-money');
  totalSumDisplay.textContent = `$ ${totalSum}`; // Format the total sum as currency
}