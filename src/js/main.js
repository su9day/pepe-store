import Swiper from 'swiper/bundle';
import BaseHelpers from './helpers/base-helpers';
import PopupManager from './modules/popup-manager';
import BurgerMenu from './modules/burger-menu';

import './modules/header.js';
import './modules/basket/basketActions.js';
import './modules/card/addUniqueIds';
import './modules/card/cartActions';
import './modules/spoiler.js';
import './modules/swiper-filter.js';
import './modules/form-scripts.js';
import './modules/sortCards.js'


BaseHelpers.checkWebpSupport();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();

BaseHelpers.headerFixed();

/**
 * Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

 * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
 * На кнопку для закрытия окна добавь класс '.button-close'
 * */
new PopupManager();

/**
 *  Модуль для работы с меню (Бургер)
 * */
new BurgerMenu().init();

/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 * */
// AOS.init();

/**
 * Параллакс мышей
 * */
// new MousePRLX();
const swiperSettings = {
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
}
export const ItemSwiper = new Swiper('.slider__container', swiperSettings);
export const NewsSwiper = new Swiper('.news__container', swiperSettings);
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
