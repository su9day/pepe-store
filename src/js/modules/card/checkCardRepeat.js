
import { addToBasket } from "./addToBasket";
import { calcBasketPrice } from '../basket/calcBasketPrice';
export const checkCartRepeat = (cart) => {
    const basketList = document.querySelector('#basket-list');
    const cartColor = cart.querySelector('.product-cart__color');
    const cartColorClasses = cartColor.classList;
    let colorClass = '';
    cartColorClasses.forEach((className) => {
      if (className.startsWith('color__')) {
        colorClass = className;
        return;
      }
    });
    const cartSize = cart.querySelector('.product-cart__size').textContent;
    const cartCategory = cart.getAttribute('data-category');
    const basketItems = basketList.querySelectorAll('.basket-item');
    let found = false;
    if (basketList.children.length === 0) {
      addToBasket(cart);
      return;
    } else {
      basketItems.forEach((item) => {
        const itemColor = item.querySelector('.basket-item__color').classList[1];
        const itemSize = item.querySelector('.basket-item__size').textContent;
        const itemCategory = item.getAttribute('data-category');
  
        if (
          itemSize === cartSize &&
          itemCategory === cartCategory &&
          itemColor === colorClass
        ) {
          const itemCounter = item.querySelector('[data-counter]');
          let itemCounterValue = Number(itemCounter.textContent);
          itemCounterValue++;
          itemCounter.textContent = itemCounterValue;
          calcBasketPrice();
  
          found = true;
          return;
        }
      });
  
      if (!found) {
        addToBasket(cart);
      }
    }
  };