import { selectCartParams } from './selectCartParams';
import { checkCartRepeat } from './checkCardRepeat';
document.body.addEventListener('click', (e) => {
  const target = e.target;
  const currentCart = target.closest('.product-cart');
  const cartMenuWrapper = target.closest('.cart-menu__wrapper');
  const cartMenu = target.closest('.cart-menu');
  if(cartMenu && !cartMenuWrapper){
    cartMenu.classList.remove('cart-menu-open');
  }
  if (target.closest('[data-cart_action="edit"]')) {
    const cartMenu = currentCart.querySelector('.cart-menu');
    cartMenu.classList.add('cart-menu-open');
  }
  if (target.closest('[data-cart_action="add"]')) {
    const cartAddButton = currentCart.querySelector('.product-cart__add');
    cartAddButton.innerHTML = `
          <svg class="svg-shopping-bag_enabled-dims">
          <use xlink:href="images/sprite.svg#shopping-bag_enabled"></use>
      </svg>
          `;
    cartAddButton.setAttribute('disabled', '');
    if (target.closest('.cart-menu')) {
      currentCart
        .querySelector('.cart-menu')
        .classList.remove('cart-menu-open');
    }
    const cartCounter = currentCart.querySelector(
      '.product-cart__mark-counter'
    );
    
    const cartHit = currentCart.querySelector('.product-cart__mark-hit');
    cartCounter.classList.add('none');
    cartHit.classList.remove('none');
    selectCartParams(currentCart);
    checkCartRepeat(currentCart);
  }
});
