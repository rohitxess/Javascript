//the cart is an array of objects
//and each array is an object 

//to make the cart interactive -->
//calculate the quantity 
//put the quantity on the page 

export const cart = []; // export will let the other files use this variable 



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
        quantity: 1
      });   
    }
  }