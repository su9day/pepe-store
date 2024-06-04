import Swiper from 'swiper/bundle';
import BaseHelpers from './helpers/base-helpers';
import { swiperSettings } from './main.js';
import BurgerMenu from './modules/burger-menu';
import Accordion from './modules/accordion';

import './modules/header.js';
import './modules/basket/basketActions.js';
import './modules/card/addUniqueIds';
import './modules/card/cartActions';
import './modules/spoiler.js';
import './modules/swiper-filter.js';
import './modules/searchProducts.js';
import './modules/sortCards.js'
import './modules/productPage/actions.js'
import './modules/productPage/addToBasket.js'
import './modules/productPage/renderProductPage.js'
import './modules/productPage/loadSlider.js'

BaseHelpers.checkWebpSupport();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();

BaseHelpers.headerFixed();

new BurgerMenu().init();
document.addEventListener('DOMContentLoaded', function() {
    const productSwiper = new Swiper('.product__slider', {
      slidesPerView: 1,
      thumbs: {
        swiper: {
          el: '.product-slider-mini__container',
          slidesPerView: 4,
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        400: {
          thumbs: {
            swiper: {
              el: '.product-slider-mini__container',
              slidesPerView: 2,
            }
          },
        },
        
      },
    });
    
  });
  export const alsoLike = new Swiper('#also-like',swiperSettings)

  new Accordion('.accordion', {
    shouldOpenAll: false, // true
    defaultOpen: [0], // [0,1]
    collapsedClass: 'open',
  });