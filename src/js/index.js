import Swiper from 'swiper/bundle';
import BaseHelpers from './helpers/base-helpers';
import BurgerMenu from './modules/burger-menu';
import './modules/loadCards.js';
import './modules/sortCards.js'
import './modules/header.js';
import './modules/basket/basketActions.js';
import './modules/card/addUniqueIds';
import './modules/card/cartActions';
import './modules/spoiler.js';
import './modules/swiper-filter.js';
import './modules/categories.js';
import './modules/searchProducts.js'



BaseHelpers.checkWebpSupport();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();

BaseHelpers.headerFixed();

new BurgerMenu().init();

export const ItemSwiper = new Swiper('.slider__container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    simulateTouch: true,
  },
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    900: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 2,
    },
  },
});

export const NewsSwiper = new Swiper('.news__container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    simulateTouch: true,
  },
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    900: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 2,
    },
  },
});
export const swiperGuide = new Swiper('.guide__container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    simulateTouch: true,
  },
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    900: {
      slidesPerView: 4,
    },
    600: {
      slidesPerView: 3,
    },
    400: {
      slidesPerView: 2,
    },
  },
});
