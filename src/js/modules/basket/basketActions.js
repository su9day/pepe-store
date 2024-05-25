import { calcBasketPrice } from "./calcBasketPrice";
import { toggleBasketStatus } from "./toggleBasketStatus";
import { addProductsToStorage } from "../storage";
const basket = document.getElementById('basket');
let counter;
let basketItemActions;
let minusBtn;
basket.addEventListener('click', (e) => {
    if (
      e.target.dataset.action === 'plus' ||
      e.target.dataset.action === 'minus'
    ) {
      basketItemActions = e.target.closest('.basket-item__actions');
      counter = basketItemActions.querySelector('[data-counter]');
      minusBtn = basketItemActions.querySelector('[data-action="minus"]');
    }
  
    if (e.target.dataset.action === 'plus') {
      minusBtn.innerText = '-';
      counter.innerText = ++counter.innerText;
      calcBasketPrice();
      toggleBasketStatus();
    }
  
    if (e.target.closest('[data-action="minus"]')) {
      if (parseInt(counter.innerText) > 1) {
        counter.innerText = --counter.innerText;
        calcBasketPrice();
        if (parseInt(counter.innerText) === 1) {
          minusBtn.innerHTML = `
            <svg class="svg-trash-alt-dims">
              <use xlink:href="images/sprite.svg#trash-alt"></use>
            </svg>`;
        } else {
          minusBtn.innerHTML = `-`;
        }
      } else {
        const currentItem = minusBtn.closest('.basket-item');
        currentItem.remove();
        calcBasketPrice();
        toggleBasketStatus();
      }
    }
    if (e.target.closest('.basket__close-btn')) {
      const basketFade = document.getElementById('basket');
      basketFade.classList.remove('basket-fade-active');
      document.body.style.overflow = 'visible';
    }
    if (e.target.closest('.basket__btn')) {
      addProductsToStorage();
    }
  });