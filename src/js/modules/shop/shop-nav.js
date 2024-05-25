import { products } from '../loadCards';
import { sortedProductsObj,sortDowner, sortUpper } from '../sortCards';
import { createElements } from '../createElements';
import { searchProductsObj } from '../searchProducts';
import { filterProductsObj } from './shopFilters/filterProducts';
const shopNav = document.getElementById('shop-nav');
const shopList = document.getElementById('shop-list');
const filterPopular = document.getElementById('filter-popular');
const filterPrice = document.getElementById('filter-price');
let priceDown = true;

shopNav.addEventListener('click', (e) => {
  const target = e.target;
  if (target.id === 'filter-price') {
    target.classList.add('shop-nav__item--active');
    const arrow = target.querySelector('.svg-arrow-down-dims');
    arrow.classList.remove('none');

    filterPopular.classList.remove('shop-nav__item--active');
    filterPopular.querySelector('.svg-arrow-down-dims').classList.add('none');

    arrow.style.transform = priceDown ? 'rotate(180deg)' : 'rotate(0deg)';
    if (priceDown) {
      sortDowner('price', searchProductsObj || filterProductsObj || products);
      shopList.innerHTML = '';
      createElements(sortedProductsObj, shopList);
      priceDown = false;
    } else {
      sortUpper('price', searchProductsObj || filterProductsObj || products);
      shopList.innerHTML = '';
      createElements(sortedProductsObj, shopList);
      priceDown = true;
    }
  }
  if (target.id === 'filter-popular') {
    target.classList.add('shop-nav__item--active');
    const arrow = target.querySelector('.svg-arrow-down-dims');
    arrow.classList.remove('none');

    filterPrice.classList.remove('shop-nav__item--active');
    filterPrice.querySelector('.svg-arrow-down-dims').classList.add('none');

    arrow.style.transform = priceDown ? 'rotate(180deg)' : 'rotate(0deg)';

    if (priceDown) {
      sortDowner('likes', searchProductsObj || filterProductsObj || products);
      shopList.innerHTML = '';
      createElements(sortedProductsObj, shopList);
      priceDown = false;
    } else {
      sortUpper('likes', searchProductsObj || filterProductsObj || products);
      shopList.innerHTML = '';
      createElements(sortedProductsObj, shopList);
      priceDown = true;
    }
  }
});
