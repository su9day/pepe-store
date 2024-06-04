import { checkAvailableColorAndSize } from "./loadCards";
export function createElements(obj, wrapper) {
  for (let key in obj) {
    const productElement = `
        <div class="slider__item swiper-slide">
                          <div  class="product-cart" data-cart data-category="${obj[key].category}" data-name = "${obj[key].name}">
                              <div class="product-cart__wrapper">
                                  <div class="product-cart__mark product-cart__mark-hit none"> 
                                      <span>hit</span>
                                  </div>
                                  <div class="product-cart__mark product-cart__mark-counter">
                                      <span>${obj[key].quantity.rest}/${obj[key].quantity.total}</span>
                                  </div>
                                  <img class="product-cart__img" src="${obj[key].img[0]}" alt="${obj[key].name}">
                                  <div class="product-cart__details">
                                      <div class="product-cart__info">
                                          <h3 class="product-cart__title">${obj[key].name}</h3>
                                          <span class="product-cart__price">${obj[key].price}$</span>
                                          <div class="product-cart__color-size" >
                                              <span class="product-cart__size">
                                              ${obj[key].size[0]}
                                              </span>
                                              <span class="product-cart__color  color__${obj[key].color[0]}">
                                              </span>
                                              <button type="button" data-cart_action="edit" class="product-cart__edit">
                                                  <svg class="svg-edit-dims">
                                                      <use xlink:href="images/sprite.svg#edit"></use>
                                                  </svg>
                                              </button>
                                          </div>
                                      </div>
                                      <button type="button" data-cart_action="add" class="product-cart__add">
                                          <svg class="svg-shopping-bag-dims">
                                              <use xlink:href="images/sprite.svg#shopping-bag"></use>
                                          </svg>
                                          <img class="product-cart__add-decoration" src="images/btn-add__decoration.png" alt="">
                                      </button>
                                  </div>
                              </div>
                              <div class="product-cart__menu cart-menu">
                                  <div class="cart-menu__wrapper">
                                      <div class="cart-menu__info">
                                          <span class="cart-menu__title">
                                          ${obj[key].name}
                                          </span>
                                          <span class="cart-menu__price">
                                          ${obj[key].price}$
                                          </span>
                                      </div>
                                      <div class="cart-menu__size size">
                                          <p class="size-title">select size</p>
                                          <div class="size__wrapper">
                                              <input class="size__input" type="radio" name="size" value="s" id="${obj[key].name}size-s">
                                              <label for="${obj[key].name}size-s">
                                                  S
                                              </label>
                                              <input class="size__input" type="radio" name="size" value="m" id="${obj[key].name}size-m">
                                              <label for="${obj[key].name}size-m">
                                                  M
                                              </label>
                                              <input class="size__input" type="radio" name="size" value="l" id="${obj[key].name}size-l">
                                              <label for="${obj[key].name}size-l">
                                                  L
                                              </label>
                                              <input class="size__input" type="radio" name="size" value="xl" id="${obj[key].name}size-xl" >
                                              <label for="${obj[key].name}size-xl">
                                                  XL
                                              </label>
                                          </div>
                                      </div>
                                      <div class="cart-menu__color color">
                                          <p class="color__title">select color</p>
                                          <div class="color__wrapper">
                                              <input class="color__input" type="radio" name="color" value="blue" id="${obj[key].name}color-blue" >
                                              <label class="color__blue" for="${obj[key].name}color-blue">
                                              </label>
                                              <input class="color__input" type="radio" name="color" value="red" id="${obj[key].name}olor-red">
                                              <label class="color__red" for="${obj[key].name}color-red">
                                              </label>
                                              <input class="color__input" type="radio" name="color" value="green" id="${obj[key].name}color-green">
                                              <label class="color__green" for="${obj[key].name}color-green">
                                              </label>
                                              <input class="color__input" type="radio" name="color" value="white" id="${obj[key].name}color-white">
                                              <label class="color__white" for="${obj[key].name}color-white">
                                              </label>
                                              <input class="color__input" type="radio" name="color" value="black" id="${obj[key].name}color-black">
                                              <label class="color__black" for="${obj[key].name}color-black">
                                              </label>
                                          </div>
                                      </div>
                                      <button type="button" class="cart-menu__button" data-cart_action="add">add to cart</button>
                                  </div>
                              </div>
                          </div>
                      </div>
        `;
    wrapper.insertAdjacentHTML('beforeend', productElement);
  }

  checkAvailableColorAndSize('color', obj);
  checkAvailableColorAndSize('size', obj);
}
