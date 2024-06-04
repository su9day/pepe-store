import { addProductToBasket } from "./addToBasket"
const addBtn = document.getElementById('product-add-btn')
const productActionsWrapper = document.querySelector('.product-actions__wrapper');
const counterBlock = document.getElementById('product-counter');
let counter = 1;
addBtn.addEventListener('click',addProductToBasket)
productActionsWrapper.addEventListener('click',(e) => {
    if (e.target.dataset.action === 'plus') {
        counterBlock.innerText = ++counter;
      }
    
      if (e.target.dataset.action === 'minus') {
        if(counterBlock.innerText !== '1'){
          counterBlock.innerText = --counter;
        }
        
      }
})