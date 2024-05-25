import { sortUpper } from './sortCards';
import { createElements } from '../modules/createElements';
import { sortedProductsObj } from './sortCards';
export const products = {
  cap: {
    category: 'cap',
    img: 'images/card_cap.png',
    name: 'pepka cap',
    price: 24,
    addedDate: new Date('2023-03-01'),
    color: ['black'],
    size: ['l'],
    likes: 8,
    quantity: {
      total: 55,
      rest: 12,
    },
  },
  cap2: {
    category: 'cap',
    img: 'images/pepe-cap2.png',
    name: 'pepka sad',
    price: 54,
    addedDate: new Date('2024-03-09'),
    color: ['black', 'red', 'green'],
    size: ['l', 's', 'm'],
    likes: 33,
    quantity: {
      total: 110,
      rest: 101,
    },
  },
  tshirt: {
    category: 't-shirt',
    img: 'images/t-shirt.png',
    name: 'pepe T-shirt',
    price: 29,
    addedDate: new Date('2023-06-02'),
    color: ['white', 'red'],
    size: ['m', 'l'],
    likes: 44,
    quantity: {
      total: 100,
      rest: 66,
    },
  },
  tshirt2: {
    category: 't-shirt',
    img: 'images/pepe-tshirt22.png',
    name: 'pepe T-shirt2',
    price: 23,
    addedDate: new Date('2024-04-02'),
    color: ['white', 'black', 'green', 'red'],
    size: ['xl', 'm', 's'],
    likes: 94,
    quantity: {
      total: 100,
      rest: 91,
    },
  },

  boots: {
    category: 'boots',
    img: 'images/boots.png',
    name: 'pepka boots',
    price: 73,
    addedDate: new Date('2023-05-14'),
    color: ['green'],
    size: ['xl'],
    likes: 154,
    quantity: {
      total: 20,
      rest: 1,
    },
  },
  pants: {
    category: 'pants',
    img: 'images/pants1.png',
    name: 'pepka pants',
    price: 37,
    addedDate: new Date('2023-04-04'),
    color: ['green'],
    size: ['m', 's'],
    likes: 66,
    quantity: {
      total: 80,
      rest: 35,
    },
  },
  socks: {
    category: 'socks',
    img: 'images/socks.png',
    name: 'pepka socks',
    price: 8,
    addedDate: new Date('2023-04-28'),
    color: ['white', 'red', 'black', 'blue'],
    size: ['s', 'm', 'l', 'xl'],
    likes: 88,
    quantity: {
      total: 190,
      rest: 86,
    },
  },
};

export const checkAvailableColorAndSize = (parameter, obj) => {
  for (let item in obj) {
    const itemCart = document.querySelector(`[data-name='${obj[item].name}']`);
    const itemParametersInputs = itemCart.querySelectorAll(
      `.${parameter}__input`
    );
    itemParametersInputs.forEach((parameterInput) => {
      //Начинается хуня
      parameterInput.setAttribute('disabled', '');
      parameterInput.nextElementSibling.classList.add(`${parameter}__disabled`);
      obj[item][parameter].forEach((parameterValue) => {
        if (parameterInput.value === parameterValue) {
          parameterInput.removeAttribute('disabled');
          parameterInput.nextElementSibling.classList.remove(
            `${parameter}__disabled`
          );
          return;
        }
      });
    });
  }
};
export const loadCards = () => {
  const swiperWrapperFeatured = document.getElementById(
    'swiper-wrapper_featured'
  );
  const swiperWrapperNews = document.getElementById('swiper-wrapper_news');
  const shopList = document.getElementById('shop-list');
  if (swiperWrapperFeatured && swiperWrapperNews) {
    createElements(products, swiperWrapperFeatured);
    sortUpper('addedDate', products);
    createElements(sortedProductsObj, swiperWrapperNews);
  } else {
    createElements(products, shopList);
  }
};
document.addEventListener('DOMContentLoaded', loadCards()); 
