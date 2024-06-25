import {cart, addtoCart} from '../data/cart.js'; // .. will help to get out of the folder because amazon.js is in the scripts folder. 
import {products} from '../data/products.js';
import { formatCurrency } from './utils/money.js';

// when the page loads the caart will display the quantity 

updateCartQuantity();

let productsHTML = '';

//accumulator property 

products.forEach( (product) => {
    productsHTML += `<div class="product-container">
    <div class="product-image-container">
      <img class="product-image"
        src="${product.image}">
    </div>

    <div class="product-name limit-text-to-2-lines">
      ${product.name}
    </div>
   
    <div class="product-rating-container">
      <img class="product-rating-stars"
        src= "images/ratings/rating-${product.rating.stars * 10}.png">
      <div class="product-rating-count link-primary">
       ${product.rating.count / 100}
      </div>
    </div>

    <div class="product-price">
     $${formatCurrency(product.priceCents)}
    </div>

    <div class="product-quantity-container">
      <select class="js-quantity-selector-${product.id}">
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart">
      <img src="images/icons/checkmark.png">
      Added
    </div>

    <button class="add-to-cart-button button-primary js-add-to-cart" 
    data-product-id = "${product.id}">
      Add to Cart
    </button>
  </div>`;

});
// this will generate the code for the new products

document.querySelector('.js-products-grid').innerHTML = productsHTML;

function updateCartQuantity(){
  let cartQuantity = 0;
      cart.forEach((cartItem)=>{
        cartQuantity += cartItem.quantity;
      });

      document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}

// to make the add to cart buttom and the cart button interactive 

document.querySelectorAll('.js-add-to-cart').forEach((button) =>{
    button.addEventListener('click', () =>{
      const productId =  button.dataset.productId; //dataset converts product.id to productId

      addtoCart(productId);

      updateCartQuantity();

    });
});

//check if the product is already in the cart 
// if it is in the cart, increase the quantity 
// if it is not in the cart, add it to the cart