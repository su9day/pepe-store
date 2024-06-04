import { toggleBasketStatus} from "../basket/toggleBasketStatus";
import { calcBasketPrice } from "../basket/calcBasketPrice";
export const addProductToBasket = () => {
    const productInfo = {
        title: document.querySelector('.product-menu__name').innerText,
        price: document.querySelector('.product-menu__price').innerText,
        size: document.querySelector('.size__input:checked').getAttribute('value'),
        color: document.querySelector('.color__input:checked').getAttribute('value'),
        img:document.querySelector('.product-slide__image').querySelector('img').getAttribute('src'),
        quantity: document.getElementById('product-counter').textContent,
    }
    const basketList = document.querySelector('.basket__list');
    let basketElem = `
     <li class="basket__item basket-item" data-category='${productInfo.category}'>
           
     <img class="basket-item__img" src="${productInfo.img}" alt="">
     <div class="basket-item__info">
       <h6 class="basket-item__title">${productInfo.title}</h6>
       <span class="basket-item__price">${productInfo.price}</span>
     </div>
     <div class="basket-item__data">
       <span class="basket-item__size">${productInfo.size}</span>
       <span class="basket-item__color color__${productInfo.color}">
       </span>
       <div class="basket-item__actions">
         <div class="basket-item__control" data-action="minus">
         -
         </div>
             <div class="basket-item__current" data-counter>${productInfo.quantity}</div>
             <div class="basket-item__control" data-action="plus">+</div>
       </div>
     </div>
   </li>
     `;
     const addedIcon = document.createElement('div')
     addedIcon.innerHTML = `
     <div class="added">
       <img class="added__img" src="${productInfo.img}" alt="added">
       <span class="added__title">
         <svg class="svg-shopping-bag-dims">
           <use xlink:href="images/sprite.svg#shopping-bag"></use>
         </svg>
         Added to cart
       </span>
       <div class="added__info">
         <span class="added__name">${productInfo.title}</span>
         <span class="added__size">${productInfo.size}</span>
         <span class="added__color color__${productInfo.color}"></span>
       </div>
     </div>
     `
     document.body.appendChild(addedIcon);
     setTimeout(() => {document.body.removeChild(addedIcon)},4000)
   basketList.insertAdjacentHTML('beforeend', basketElem);
   toggleBasketStatus();
   calcBasketPrice();
   console.log(productInfo)
}