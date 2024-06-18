//the cart is an array of objects
//and each array is an object 

//to make the cart interactive -->
//calculate the quantity 
//put the quantity on the page 

// export will let the other files use this variable 

export let cart = JSON.parse(localStorage.getItem('cart'));
if (!cart){
  cart =  [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
    deliveryOptionId:'1'
  },{
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1,
    deliveryOptionId:'2'
  }]; 
}


function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}

export function addtoCart(productId){
    let matchingItem;  // to store the matching item, when the item is selected twice 
  
    cart.forEach((cartItem)=>{
      if (productId === cartItem.productId){
        matchingItem = cartItem;
      }
    });
  
    
    const cartQuantityValue = document.querySelector(`.js-quantity-selector-${productId}`).value;  // this is a string so we need to change it to number 
  
    if (matchingItem){
      matchingItem.quantity += Number(cartQuantityValue);
    } else {
        cart.push({
        productId: productId,
        quantity: 1,
        deliveryOptionId:'1'
      });   
    }
    saveToStorage();
  }

  // function to update and calculate cart quantity use the updatecartquantity code to 

  export function calculateCartQauntity (){

  }

  //functionn from removing from cart 

  export function removeFromCart(productId){
    //create a new array 
    //loop through the cart 
    // add each product to the new array, except from this productId

    const newCart = [];
    cart.forEach((cartItem) =>{
      if (cartItem.productId !== productId){
        newCart.push(cartItem);
      }
    })
    cart = newCart;

    saveToStorage();
  }

  export function updateDeliveryOption (productId, deliveryOptionId){
    //we want to know the product and the delivery option 
    //loop through the cart and find the product 
    //update the delivery optionId of the product

    let matchingItem;  // to store the matching item, when the item is selected twice 
   
    cart.forEach((cartItem)=>{
      if (productId === cartItem.productId){
        matchingItem = cartItem;
      }
    });
    console.log(matchingItem);
    matchingItem.deliveryOptionId = deliveryOptionId;

    saveToStorage(); // because we updated the cart 

  }